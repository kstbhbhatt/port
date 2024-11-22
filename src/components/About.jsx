import DownloadIcon from "@mui/icons-material/Download";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import BrushIcon from "@mui/icons-material/Brush";
import WebIcon from "@mui/icons-material/Web";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
} from "@mui/material";
const About = () => {
  const section = " w-full lg:w-1/3";
  const line = "w-10 block border-b-4 border-b-[#F85C70]";
  return (
    <section
      id="about"
      className="flex lg:flex-row flex-col gap-3 py-5 border-b border-b-[#dee2e6]"
    >
      <Box className={section}>
        <Card variant="outlined">
          <CardHeader
            title={
              <Box>
                <Typography
                  variant="h3"
                  color="primary"
                  component="h3"
                  className="text-2xl font-semibold"
                >
                  Who am I?
                </Typography>
                <span className={line} />
              </Box>
            }
          ></CardHeader>
          <CardContent className="card-content">
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color="primary"
            >
              Frontend Developer with 2 years of expertise in crafting visually
              appealing and user-friendly web interfaces.
            </Typography>
            <Typography variant="body2" color="primary">
              Skilled in HTML, CSS, JavaScript, React enhancing website
              accessibility, optimizing performance, and delivering exceptional
              user experiences. Demonstrated ability to collaborate effectively
              in team environments, contributing to successful project outcomes.
              Committed to staying up-to-date with the latest frontend
              development trends and best practices.
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button
              className="w-fit"
              component="label"
              role={undefined}
              variant="outlined"
              color="secondary"
              tabIndex={-1}
              startIcon={<DownloadIcon />}
            >
              Resume
            </Button>
          </CardActions> */}
        </Card>
      </Box>
      <Box className={section}>
        <Card variant="outlined">
          <CardHeader
            title={
              <Box>
                <Typography
                  variant="h3"
                  color="primary"
                  component="h3"
                  className="text-2xl font-semibold"
                >
                  Personal Info
                </Typography>
                <span className={line} />
              </Box>
            }
          ></CardHeader>
          <CardContent className="card-content">
            <ul className="personal-info">
              <li>
                <Typography
                  variant="span"
                  color="primary"
                  component="span"
                  className="font-bold"
                >
                  Birthdate :
                </Typography>{" "}
                20/11/1999
              </li>
              <li>
                <Typography
                  variant="span"
                  color="primary"
                  component="span"
                  className="font-bold"
                >
                  Email :
                </Typography>{" "}
                kstbhbhatt@gmail.com
              </li>
              <li>
                <Typography
                  variant="span"
                  color="primary"
                  component="span"
                  className="font-bold"
                >
                  Phone :
                </Typography>{" "}
                +91 83510-70350
              </li>
              <li>
                <Typography
                  variant="span"
                  color="primary"
                  component="span"
                  className="font-bold"
                >
                  Address :
                </Typography>{" "}
                Bengaluru
              </li>
            </ul>
          </CardContent>
          <CardActions>
            <ul className="flex gap-3 mb-5 lg:mb-10">
              <li>
                <a href="https://www.facebook.com/kstbhbhatt" target="_blank">
                  <FacebookIcon color="secondary" fontSize="medium" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/kstbhbhatt" target="_blank">
                  <XIcon color="secondary" fontSize="medium" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/kstbhbhatt" target="_blank">
                  <InstagramIcon color="secondary" fontSize="medium" />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/kstbhbhatt" target="_blank">
                  <GitHubIcon color="secondary" fontSize="medium" />
                </a>
              </li>
            </ul>
          </CardActions>
        </Card>
      </Box>
      <Box className={section}>
        <Card variant="outlined">
          <CardHeader
            title={
              <Box>
                <Typography
                  variant="h3"
                  color="primary"
                  component="h3"
                  className="text-2xl font-semibold"
                >
                  My Expertise
                </Typography>
                <span className={line} />
              </Box>
            }
          ></CardHeader>
          <CardContent className="card-content">
            <div className="flex align-top">
              <WebIcon color="secondary" fontSize="large" className="mx-2" />
              <div className="icon-text">
                <Typography
                  variant="h6"
                  color="primary"
                  component="h6"
                  className="font-medium"
                >
                  Web Development
                </Typography>
                <Typography
                  variant="p"
                  color="primary"
                  component="p"
                  className="text-sm text-justify font-normal"
                >
                  Web Pages made using HTML, CSS and JavaScript. The webpages
                  can be static and dymanic with support for all screen sizes.
                </Typography>
              </div>
            </div>
            <div className="flex">
              <BrushIcon color="secondary" fontSize="large" className="mx-2" />
              <div className="icon-text">
                <Typography
                  variant="h6"
                  color="primary"
                  component="h6"
                  className="font-medium"
                >
                  Digital Art
                </Typography>
                <Typography
                  variant="p"
                  color="primary"
                  component="p"
                  className="text-sm text-justify font-normal"
                >
                  A fan made reimagining of popular pop culture figures made on
                  Procreate.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </section>
  );
};
export default About;
