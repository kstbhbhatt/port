import { useState } from "react";
import { Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function PokedexPopup({
  src = "",
  isOpen = false,
  onClose = () => {},
}) {
  return (
    <Box>
      {isOpen && (
        <Box className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <Box
            className="bg-white p-5 pt-12 rounded-lg shadow-lg max-w-5xl w-full relative"
            style={{
              // maxHeight: "calc( 100vh - 84px)",
              height: "calc( 100vh - 84px)",
              marginTop: "64px",
            }}
          >
            {/* Close button */}

            <Button
              onClick={() => onClose()}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              <CloseIcon />
            </Button>

            {/* Pokedex App */}
            <iframe
              src={src}
              className="w-full border-none"
              style={{ height: "calc(100% - 52px)" }}
            ></iframe>

            {/* Open in New Tab Button */}
            <Box className="mt-4 text-center">
              <Button
                className="w-fit"
                role={undefined}
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
