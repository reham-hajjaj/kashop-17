import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';
import { useAuthStore } from '../store/useAuthStore';
import { useThemeStore } from '../store/ThemeStore';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLanguageStore } from '../store/LanguageStore';
import { useTranslation } from 'react-i18next';
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
 const { t } = useTranslation();
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
           {t("nav.home")}
          </Button>
            <Button color="inherit" component={Link} to="/cart">
           {t("nav.carts")}
          </Button>
           <Button color="inherit" component={Link} to="/profile">
           {t("nav.profile")}
          </Button>
          {token ? (
            <Button color="inherit" onClick={Logout}>
            {t("nav.logout")}
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                {t("nav.login")}
              </Button>
              <Button color="inherit" component={Link} to="/register">
              {(t("nav.register"))}
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;