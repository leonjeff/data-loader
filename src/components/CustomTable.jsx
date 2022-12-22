import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import MUIDataTable from "mui-datatables";

const columns = [
  { name: "id", label: "ID" },
  { name: "licensePlate", label: "PPU" },
  { name: "vehicleType", label: "Tipo de Vehiculo" },
  { name: "make", label: "Marca" },
  { name: "model", label: "Modelo" },
  { name: "year", label: "Año" },
  {
    name: "Actions",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button>
            <DeleteIcon />
          </Button>
        );
      },
    },
  },
];

const CustomTable = ({ data }) => {
  return (
    <div
      style={{
        height: 600,
        width: "100%",
      }}
    >
      <MUIDataTable
        title={"Listado de vehiculos"}
        data={data}
        columns={columns}
        options={{
          selectableRows: false,
        }}
      />
    </div>
  );
};

export { CustomTable };
