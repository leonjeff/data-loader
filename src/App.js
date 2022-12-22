import { useState, useEffect } from "react";
import axios from "axios";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import MUIDataTable from "mui-datatables";

//Custom components
import { FileUploader } from "./components/FileUploader";
import { Footer } from "./components/Footer";
import { MenuBar } from "./components/MenuBar";

function App() {
  const baseURL = "http://localhost:3030/vehicle/";
  const [vehicle, setVehicle] = useState(null);
  const [licensePlate, setLicensePlate] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const urlSearch = baseURL + licensePlate;
  const getByLicensePlate = () => {
    axios.get(urlSearch).then((response) => {
      setVehicle(response.data);
      if (response == null) return null;
    });
  };

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get("http://localhost:3030/vehicles");
        setList(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequest();
  }, [setList]);

  const deleteSelectedVehicle = async (id) => {
    try {
      const resp = await axios.delete(
        "http://localhost:3030/vehicle/delete" + id
      );
      console.log("Eliminado");
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    { name: "id", label: "ID" },
    { name: "licensePlate", label: "PPU" },
    { name: "make", label: "Marca" },
    { name: "model", label: "Modelo" },
    { name: "yearOfManufacture", label: "Año" },
    {
      name: "Actions",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              onClick={() => {
                //console.log(tableMeta.rowData[0]);

                const id = tableMeta.rowData[0];
                deleteSelectedVehicle(id);
              }}
            >
              <DeleteIcon />
            </Button>
          );
        },
      },
    },
  ];

  /*
  const deleteVehicle = (id) => {
    axios.delete(`http://localhost:3030/vehicle/`+id).then(console.log('Delete successful'));
  };
  */

  const DeleteButton = () => {
    return (
      <Button>
        <DeleteIcon />
      </Button>
    );
  };

  const customRows = list.map((item) => ({
    id: item._id,
    licensePlate: item.licensePlate,
    make: item.make,
    model: item.model,
    yearOfManufacture: item.yearOfManufacture,
  }));

  return (
    <>
      <MenuBar />
      {vehicle}
      <Container
        maxWidth="100%"
        style={{
          display: "flex",
          bgcolor: "background.paper",
          border: "1px solid #1976d2",
          height: "140px",
          padding: 0,
        }}
      >
        <Grid container style={{ paddingTop: "15px" }}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <FileUploader />
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={12}>
            <MUIDataTable
              title={"Listado de vehiculos"}
              data={customRows}
              columns={columns}
              pagination={true}
              options={{
                selectableRows: false,
                tableBodyHeight: "400px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default App;
