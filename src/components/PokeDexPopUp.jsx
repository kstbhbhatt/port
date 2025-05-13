import { useEffect } from "react";
import { Button, Box, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme as useCustomTheme } from "../theme/themeContext";

export default function PokedexPopup({
  src = "",
  isOpen = false,
  onClose = () => {},
}) {
  const theme = useTheme(); // Get MUI theme
  const { isDarkMode } = useCustomTheme(); // Get our custom theme context

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.querySelector("body").classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <Box>
      {isOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 90,
          }}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              p: 5,
              pt: 12,
              borderRadius: 1,
              boxShadow: 24,
              maxWidth: "64rem",
              width: "100%",
              position: "relative",
              height: "calc(100svh - 84px)",
              mt: "64px",
              color: "text.primary",
              border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            {/* Close button */}
            <Button
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                minWidth: "auto",
                color: "text.secondary",
                "&:hover": {
                  // Use theme.secondary.main instead of undefined softPink variable
                  color: isDarkMode
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                },
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </Button>
            {/* Pokedex App iframe with theme-aware border */}
            <Box
              sx={{
                height: "calc(100% - 52px)",
                width: "100%",
                overflow: "hidden",
                borderRadius: 1,
                border: isDarkMode
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "1px solid rgba(0,0,0,0.05)", // Add subtle border in light mode too
                // Remove the background color from here - it's affecting the iframe
                position: "relative", // Add this for proper stacking
              }}
            >
              {/* Add an overlay to prevent interaction with iframe when needed */}
              {isDarkMode && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "transparent",
                    pointerEvents: "none", // This allows clicking through to the iframe
                    zIndex: 1,
                  }}
                />
              )}
              <iframe
                src={src}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff", // Add explicit white background to iframe
                }}
                title="Project Preview"
                allowTransparency="true" // This helps with background issues
              />
            </Box>
            {/* Open in New Tab Button */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Button
                className="content-btn"
                onClick={() =>
                  window.open(src, "_blank", "noopener noreferrer")
                }
                variant="outlined"
                color="secondary"
                tabIndex={-1}
              >
                Open in New Tab
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}
