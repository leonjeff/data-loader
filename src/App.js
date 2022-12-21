import { useState } from 'react';
import axios, { formToJSON } from 'axios';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { FileUploader } from './components/FileUploader';
import { IconButton } from '@material-ui/core';

import { columns, rows } from './utils/datatable.js';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const baseURL = 'http://localhost:3030/vehicle/';

function App() {
  const [vehicule, setVehicule] = useState(null);
  const [licensePlate, setLicensePlate] = useState('');

  const handleChange = (event) => {
    setLicensePlate(event.target.value);
    console.log('value is:', event.target.value);
  };

  const urlSearch = baseURL + licensePlate;

  const getByLicensePlate = () => {
    axios.get(urlSearch).then((response) => {
      setVehicule(response.data);
      if (response == null) return null;
    });

    console.log('AAAA');
  };

  console.log(vehicule);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Registro y Mantenedor de Patentes
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <Container
            maxWidth="xl"
            sx={{
              display: 'flex',
              bgcolor: 'background.paper',
              // border: '2px solid orange',
            }}
          >
            <button
              type="button"
              className="button"
              onClick={() => {
                console.log('do something');
              }}
            >
              Adicionar
            </button>

            <div style={{ width: '50%' }}>
              <FileUploader />
            </div>

            <div
              style={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {vehicule ? <h1>{vehicule.licensePlate}</h1> : null}

              <input
                style={{ width: '200px', minHeight: '50px', maxHeight: '50px' }}
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={getByLicensePlate}
                style={{
                  width: '70px',
                  minHeight: '50px',
                  maxHeight: '50px',
                  borderRadius: '0',
                  boxShadow: 'none',
                }}
              >
                Buscar
              </Button>
            </div>
          </Container>
          {/* End hero unit */}

          <div
            style={{
              height: 500,
              width: '100%',
              padding: '30px',
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </main>
        {/* Footer */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            p: 6,
            position: 'fixed',
            width: '100%',
            bottom: '0',
          }}
          component="footer"
        >
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}

export default App;
