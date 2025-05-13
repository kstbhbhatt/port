import { useTheme } from "../theme/themeContext";
import { Box, IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 1000,
      }}
    >
      <Tooltip title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
        <IconButton
          onClick={toggleTheme}
          color="primary"
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "background.paper",
              opacity: 0.9,
            },
          }}
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ThemeToggle;
