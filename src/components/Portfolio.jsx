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
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import Image from "next/image";
import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/2.jpg";
import img3 from "../../public/assets/3.jpg";
import img4 from "../../public/assets/4.jpg";
import img5 from "../../public/assets/5.jpg";
import img6 from "../../public/assets/6.jpg";
import img7 from "../../public/assets/7.jpg";
import img8 from "../../public/assets/8.jpg";
import img9 from "../../public/assets/9.jpg";
import img10 from "../../public/assets/10.jpg";
const line = "w-8 block border-b-2 border-b-[#F85C70]";
const ActionAreaCard = ({
  img = { src: "" },
  content = { title: "", body: "" },
  url = "",
}) => {
  return (
    <Card className="w-full lg:w-1/3">
      <CardActionArea
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={img.src}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="p"
            color="primary"
            component="p"
            className="text-xl font-semibold"
          >
            {content.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {content.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const Portfolio = () => {
  const imageData = [
    { img: img1, row: 1, cols: 2 },
    { img: img2, row: 1, cols: 1 },
    { img: img3, row: 1, cols: 2 },
    { img: img4, row: 1, cols: 1 },
    { img: img5, row: 2, cols: 1 },
    { img: img6, row: 2, cols: 1 },
    { img: img7, row: 3, cols: 1 },
    { img: img8, row: 2, cols: 1 },
    { img: img9, row: 1, cols: 1 },
    { img: img10, row: 1, cols: 2 },
  ];
  const cards = [
    {
      img: { src: "/assets/s23.jpg" },
      content: {
        title: "Samsung Galaxy S23 Ultra",
        body: "This is the very first react project",
      },
      url: "https://kstbhbhatt.github.io/react1/",
    },
    {
      img: { src: "/assets/pokedex.jpeg" },
      content: {
        title: "Pokedex",
        body: "This is an informative webpage about pokemons stats",
      },
      url: "https://kstbhbhatt.github.io/pokedex/",
    },
  ];

  return (
    <section id="portfolio" className="py-5">
      <Box className="container4">
        <Typography
          variant="div"
          color="primary"
          component="div"
          className="text-2xl font-semibold"
        >
          <Typography
            variant="span"
            color="secondary"
            component="span"
            className="text-2xl font-semibold"
          >
            My{" "}
          </Typography>
          Portfolio
        </Typography>
        <Box className="py-4">
          <Box className="my-4">
            <Typography
              variant="div"
              color="primary"
              component="div"
              className="text-xl font-semibold"
            >
              Projects
            </Typography>
            <span className={line} />
          </Box>
          <Box className="flex gap-3 flex-col lg:flex-row">
            {cards.map((card) => (
              <ActionAreaCard
                img={card.img}
                content={card.content}
                url={card.url}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "fit-content",
            overflowY: "scroll",
          }}
        >
          <Box className="my-4">
            <Typography
              variant="div"
              color="primary"
              component="div"
              className="text-xl font-semibold"
            >
              Digital Art
            </Typography>
            <span className={line} />
          </Box>
          <Box
            className="p-2 m-1"
            sx={{
              //   border: "1px solid rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              boxShadow: 2,
            }}
          >
            <ImageList variant="quilted" cols={3} gap={8}>
              {imageData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols} rows={item.row}>
                  <Image
                    className="object-cover h-full hover:object-contain"
                    src={item.img}
                    alt={item.title || "Image"}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
export default Portfolio;
