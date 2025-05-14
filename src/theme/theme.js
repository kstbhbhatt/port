import { createTheme } from "@mui/material/styles";

// Color constants
const softerNavy = "#121f36"; // Less intense navy background
const softerMidnight = "#202d43"; // Softer card background
const headerBlue = "#3a7bd5"; // Blue from header image
const softPink = "#eb7b90"; // Softer pink accent
const greyText = "#a2aac6"; // Grey text for dark theme
const lightGreyText = "#7e8ca8"; // Lighter grey for secondary text
const brightWhite = "#ffffff"; // Bright white for important text in dark theme

// Light theme - minimal typography overrides
const lightTheme = createTheme({
  // Light theme remains mostly unchanged
  palette: {
    mode: "light",
    primary: {
      main: "#333333",
    },
    secondary: {
      main: "#F85C70",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    header: {
      main: "#ffffff",
    },
    divider: "#dee2e6",
  },
  typography: {
    fontFamily:
      '"Poppins", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    h1: {
      color: brightWhite,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: "1px",
          "&:hover": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ".MuiCardHeader-root": {
            padding: "1.5rem",
          },
          ".MuiCardContent-root": {
            padding: "1.5rem",
          },
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.05)",
          borderRadius: "0.5rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)",
          color: "#333333",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSvgIcon-colorHeader": {
            color: "#eee",
            "&:hover": {
              color: "#F85C70",
            },
          },
        },
      },
    },
  },
});

// Dark theme with fixes
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: greyText,
      light: "#f294a6",
      dark: "#c66277",
      contrastText: "#ffffff",
    },
    secondary: {
      main: softPink,
      light: "#5a93e0",
      dark: "#2a5ba0",
      contrastText: "#ffffff",
    },
    background: {
      default: softerNavy,
      paper: softerMidnight,
    },
    text: {
      primary: greyText,
      secondary: lightGreyText,
    },
    header: {
      main: brightWhite,
    },
    divider: "#2d3748",
  },
  typography: {
    fontFamily:
      '"Poppins", "San Francisco", "SF Pro Text", -apple-system, system-ui, sans-serif',
    h1: {
      color: brightWhite,
    },
    h3: {
      color: brightWhite,
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          // Apply styles only to non-navbar buttons (use a class on your content buttons)
          props: { className: "content-btn" },
          style: {
            border: `1px solid ${softPink}`,
            color: softPink,
            "&:hover": {
              backgroundColor: `rgba(235, 123, 144, .1)`,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          // No border by default for navbar buttons
        },
        contained: {
          backgroundColor: "rgba(235, 123, 144, 1)",
          color: brightWhite,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "rgba(235, 123, 144, 0.25)",
            boxShadow: "none",
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: "1.25rem", // Make card headers smaller
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          ".MuiCardHeader-root": {
            padding: "1.5rem",
          },
          ".MuiCardContent-root": {
            padding: "1.5rem",
          },
          backgroundColor: "rgba(32, 45, 67, 0.7)",
          boxShadow: `0 10px 30px -15px rgba(10, 25, 48, 0.5)`,
          borderRadius: "4px",
          border: "none",
          transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
          "&:hover": {
            boxShadow: `0 20px 30px -15px rgba(10, 25, 48, 0.5)`,
            transform: "translateY(-5px)",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h3[color="header"]': {
            color: brightWhite,
          },
          // Fix section headers size
          "&.MuiTypography-h3.text-2xl": {
            fontSize: "1.25rem",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.MuiSvgIcon-colorHeader": {
            color: greyText,
            "&:hover": {
              color: softPink,
            },
          },
          "&.MuiSvgIcon-colorSecondary": {
            color: softPink,
          },
        },
      },
    },
    Banner: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(18, 31, 54, 0.85)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.5)",
          color: brightWhite,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(18, 31, 54, 0.85)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
