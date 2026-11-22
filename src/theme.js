import { createTheme } from "@mui/material";

const getTheme = (mode) => {
  return createTheme({
    palette: {
      mode,

      primary: {
        main: "#C13C98",
        light: "#D66BB5",
        dark: "#92266F",
        contrastText: "#FFFFFF",
      },

      secondary: {
        main: "#263957",
        light: "#526783",
        dark: "#17263D",
        contrastText: "#FFFFFF",
      },

      background: {
        default: mode === "light" ? "#F8F8FA" : "#10151F",
        paper: mode === "light" ? "#FFFFFF" : "#1C2533",
      },

      text: {
        primary: mode === "light" ? "#263957" : "#FFFFFF",
        secondary: mode === "light" ? "#9299A5" : "#B0BAC8",
      },

      error: {
        main: "#E53935",
      },

      success: {
        main: "#2E9D68",
      },

      warning: {
        main: "#F2B544",
      },
    },

    typography: {
      fontFamily: "Roboto, Arial, sans-serif",

      h1: {
        fontWeight: 800,
      },

      h2: {
        fontWeight: 700,
      },

      h3: {
        fontWeight: 700,
      },

      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },

    shape: {
      borderRadius: 10,
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: "10px 20px",
          },
          components:{
            MuiTextField:{
              defultProps:{
                 fullWidth:true,
                  margin:"normal"
              }
            } 
          }
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });
};

export default getTheme;