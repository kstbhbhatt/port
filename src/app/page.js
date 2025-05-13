"use client";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Container, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

import About from "@/components/About";
import Resume from "@/components/Resume";
import Banner from "@/components/Banner";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  // Remove the theme creation here as we're using our theme context now

  return (
    <div id="home">
      <Header />
      <NavBar />
      <Container>
        <About />
        <Resume />
      </Container>
      <Banner>
        <Box className="flex flex-col justify-center items-center">
          <Typography
            variant="h3"
            color="header"
            component="h3"
            className="text-2xl text-center font-semibold"
          >
            Currently I am working for Deloitte
          </Typography>
          <Button
            sx={{ marginTop: "20px" }}
            className="w-fit"
            component="label"
            role={undefined}
            variant="contained"
            color="secondary"
            tabIndex={-1}
          >
            <Link href={`#contact`}>Contact Me</Link>
          </Button>
        </Box>
      </Banner>
      <Container>
        <Portfolio />
      </Container>
      <Contact />
      <Banner bgColor="#17263C">
        <Box className="flex flex-col justify-center items-center">
          <Typography
            variant="div"
            color="header"
            component="div"
            className="text-lg text-center font-semibold"
          >
            &copy; 2024 Created by <span>Kaustubh Bhatt</span>
          </Typography>
        </Box>
      </Banner>
    </div>
  );
}
