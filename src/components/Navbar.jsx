import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';
import { useAuthStore } from '../store/useAuthStore';
import { useThemeStore } from '../store/ThemeStore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLanguageStore } from '../store/LanguageStore';
function Navbar() {
  const token = useAuthStore((state) => state.token);
  const logout = useAuthStore((state) => state.logout);
const toggleMode = useThemeStore((state)=>state.toggleMode);
const mode =useThemeStore((state)=>state.mode);
  const Logout = () => {
    logout();
  };
 const language = useLanguageStore((state) => state.language);
const toggleLanguage = useLanguageStore((state) => state.toggleLanguage);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit"
          }}
        >
          Kashop
        </Typography>
      
        <Tooltip title={mode=="light"?"Dark mode":"Light mode"}>
  <IconButton  color= "inherit" onClick={toggleMode}>
          {mode=="light"?<DarkModeIcon/>:<LightModeIcon/>}
     </IconButton>     
</Tooltip>
<Button onClick={toggleLanguage}>
  {language == "en"?"العربية":"English"}
</Button>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          {token ? (
            <Button color="inherit" onClick={Logout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;