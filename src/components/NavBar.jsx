import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Box,
  Typography,
  useMediaQuery,
  SwipeableDrawer,
  List,
  IconButton,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);
  const isDesktop = useMediaQuery("(min-width:900px)");
  const inPageNavigation1 = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Resume", id: "resume" },
  ];
  const inPageNavigation2 = [
    { title: "Portfolio", id: "portfolio" },
    { title: "Contact", id: "contact" },
  ];
  return (
    <AppBar position="sticky" color="header">
      <Container>
        <Toolbar className="gap-3 justify-between w-full" disableGutters>
          {isDesktop && (
            <Box className="flex gap-3 w-1/3">
              {inPageNavigation1.map((item) => (
                <Button key={item.id} variant="text" color="primary">
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </Button>
              ))}
            </Box>
          )}
          <Box
            color="primary"
            className={`flex ${
              isDesktop ? "flex-col w-1/3" : "gap-5"
            } items-center justify-between`}
          >
            <Typography
              variant="h5"
              color="primary"
              component="h5"
              className="brand-title text-lg lg:text-2xl"
            >
              Kaustubh Bhatt
            </Typography>

            <Typography
              variant="span"
              color="primary"
              component="span"
              className="brand-title"
              fontSize={12}
            >
              Web Developer | Digital Art
            </Typography>
          </Box>
          {isDesktop && (
            <Box className="flex gap-3 w-1/3 justify-end">
              {inPageNavigation2.map((item) => (
                <Button key={item.id} variant="text" color="primary">
                  <Link href={`#${item.id}`}>{item.title}</Link>
                </Button>
              ))}
            </Box>
          )}
          {!isDesktop && (
            <IconButton sx={{ mx: 1 }} onClick={() => setDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          {!isDesktop && (
            <SwipeableDrawer
              open={drawer}
              onClose={() => setDrawer(false)}
              anchor="top"
            >
              <Box role="presentation" onClick={() => setDrawer(false)}>
                <List>
                  {inPageNavigation1.map((item, index) => (
                    <ListItemButton key={item.id} className="justify-center">
                      <Button key={item.key} variant="text" color="primary">
                        <Link href={`#${item.id}`}>{item.title}</Link>
                      </Button>
                    </ListItemButton>
                  ))}
                </List>
                <Divider />
                <List>
                  {inPageNavigation2.map((item, index) => (
                    <ListItemButton
                      key={item.id}
                      onClick={() => setDrawer(false)}
                      className="justify-center"
                    >
                      <Button key={item.key} variant="text" color="primary">
                        <Link href={`#${item.id}`}>{item.title}</Link>
                      </Button>
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
