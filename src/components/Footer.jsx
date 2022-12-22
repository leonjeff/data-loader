import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://jeffleondev.com/">
        Desarrollado por Jeffrey Leon
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: 3,
        position: "fixed",
        width: "100%",
        bottom: "0",
      }}
      component="footer"
    >
      <Typography variant="h6" align="center" gutterBottom>
        Tabpart
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Importación y distribución de repuestos y accesorios automotrices.
      </Typography>
      <Copyright />
    </Box>
  );
};

export { Footer };
