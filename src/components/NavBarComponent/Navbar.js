import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import styles from './navbar.module.css'
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar=()=> {
  let navigate = useNavigate();

  const {navbarPosition}= styles;

  const userName=localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/");
  };

  const goToIdentityPage=()=>{
    navigate("/identityViewPage")
  }

  const goToClaimIssuerPage=()=>{
    navigate("/claimIssuerPage")
  }

  const goToClaimCheckerPage=()=>{
    navigate("/claimCheckerPage")
  }

  return (
    <Box className={navbarPosition}  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}

          </IconButton>
          <Typography variant="h6" component="div" sx={{  flexGrow: 1 }}>
            {userName}
          </Typography>

          <Button onClick={goToIdentityPage} color="inherit">
            Identity
          </Button>

          <Button onClick={goToClaimIssuerPage} color="inherit">
            Claim Issuer
          </Button>

          <Button onClick={goToClaimCheckerPage} color="inherit">
            Claim Checker
          </Button>

          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>

          <IconButton aria-label="Logout">
        <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar