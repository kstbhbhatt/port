"use client";
import Link from "next/link";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import { Typography, Box, Button, Container } from "@mui/material";

const Header = () => {
  const onButtonClick = () => {
    const resume = "/assets/Kaustubh_Bhatt_React_JS.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Kaustubh_Bhatt_React_JS.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box className="h-svh bg-header-img bg-cover  bg-center ">
      <Container className=" h-full">
        <Box className=" h-full  flex flex-col p-5 lg:p-10">
          <ul className="flex gap-3 mb-5 lg:mb-10">
            <li>
              <a href="https://www.facebook.com/kstbhbhatt" target="_blank">
                <FacebookIcon color="header" fontSize="medium" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/kstbhbhatt" target="_blank">
                <XIcon color="header" fontSize="medium" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/kstbhbhatt" target="_blank">
                <InstagramIcon color="header" fontSize="medium" />
              </a>
            </li>
            <li>
              <a href="https://www.github.com/kstbhbhatt" target="_blank">
                <GitHubIcon color="header" fontSize="medium" />
              </a>
            </li>
          </ul>
          <div className="header-content flex flex-col h-full justify-center ">
            <Typography
              variant="h4"
              color="header"
              component="h4"
              className="header-subtitle"
            >
              Hello, I am
            </Typography>
            <Typography
              variant="h1"
              color="header"
              component="h1"
              className="header-title text-6xl lg:text-8xl"
            >
              Kaustubh Bhatt
            </Typography>
            <Typography
              variant="h6"
              color="header"
              component="h6"
              className="header-mono"
            >
              Front end Developer | Digital Art
            </Typography>
            {/* <Link
              href="/assets/Kaustubh_Bhatt_React_JS.pdf"
              download="Kaustubh_Bhatt_React_JS.pdf"
              passHref
              target="_blank"
            > */}
            <Button
              sx={{ marginTop: "20px" }}
              className="w-fit"
              component="a"
              href="/assets/Kaustubh_Bhatt_React_JS.pdf"
              download="Kaustubh_Bhatt_React_JS.pdf"
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
            >
              Resume
            </Button>
            {/* </Link> */}
          </div>
        </Box>
      </Container>
    </Box>
  );
};
export default Header;
