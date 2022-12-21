import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';

import './styles.css';

const FileUploader = ({ onSuccess }) => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i]);
    }

    axios
      .post('//localhost:3030/upload', data)
      .then((response) => {
        toast.success('Upload Success');
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error('Upload Error');
      });
  };

  return (
    <form
      method="post"
      action="#"
      id="#"
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="form-group files">
        <input
          type="file"
          onChange={onInputChange}
          className="form-control"
          multiple
        />
      </div>
      <div>
        <Button
          variant="contained"
          style={{
            width: '150px',
            minHeight: '50px',
            maxHeight: '50px',
            borderRadius: '0',
            boxShadow: 'none',
          }}
        >
          Cargar Data
        </Button>
      </div>
    </form>
  );
};

export { FileUploader };
