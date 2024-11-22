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
  ImageList,
  ImageListItem,
} from "@mui/material";
const Banner = ({ bgColor = "#343a40", children }) => {
  return (
    <Box sx={{ backgroundColor: bgColor }} className={`py-10`}>
      <Container>{children}</Container>
    </Box>
  );
};
export default Banner;
