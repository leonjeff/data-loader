import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import "./styles.css";

const FileUploader = ({ onSuccess }) => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("//localhost:3030/upload", data)
      .then((response) => {
        toast.success("Upload Success");
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };

  return (
    <form
      method="post"
      action="#"
      id="#"
      onSubmit={onSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "65px",
          }}
        >
          <input
            type="file"
            onChange={onInputChange}
            //className="form-control"
            multiple
            style={{
              border: "1px solid",
              width: "calc(96% - 2px)",
              margin: "1%",
              height: "60px",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "60px",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            style={{
              width: "96%",
              margin: "1%",
              minHeight: "50px",
              maxHeight: "50px",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            Cargar Data
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { FileUploader };
