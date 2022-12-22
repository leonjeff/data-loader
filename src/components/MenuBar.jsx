import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const MenuBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Registro y Mantenedor de Patentes
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { MenuBar };
