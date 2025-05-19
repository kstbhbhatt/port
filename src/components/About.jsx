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
  const section = "w-full lg:w-1/3";
  const line = "w-10 block border-b-4 border-b-[#F85C70]";
  return (
    <section
      id="about"
      className="flex lg:flex-row flex-col gap-3 py-5 border-b border-b-[#dee2e6]"
    >
      <Box className={section}>
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardHeader
            title={
              <Box>
                <Typography variant="h3" color="primary" component="h3">
                  Who am I?
                </Typography>
                <span className={line} />
              </Box>
            }
          ></CardHeader>
          <CardContent className="card-content">
            <Typography variant="body1" component="div" color="primary">
              Frontend Developer with 3 years of experience building
              user-friendly web interfaces using HTML, CSS, JavaScript and
              React. Focused on accessibility, performance optimization, and
              collaborative development. Constantly exploring the latest
              frontend technologies and best practices to deliver exceptional
              user experiences.
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
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardHeader
            title={
              <Box>
                <Typography variant="h3" color="primary" component="h3">
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
          <CardActions
            sx={{
              padding: "1.5rem",
            }}
          >
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
        <Card variant="outlined" sx={{ height: "100%" }}>
          <CardHeader
            title={
              <Box>
                <Typography variant="h3" color="primary" component="h3">
                  My Expertise
                </Typography>
                <span className={line} />
              </Box>
            }
          ></CardHeader>
          <CardContent className="card-content">
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex gap-2">
                <WebIcon color="secondary" fontSize="large" />
                <Typography
                  variant="h6"
                  color="primary"
                  component="h6"
                  className="font-medium"
                >
                  Web Development
                </Typography>
              </div>

              <div className="icon-text">
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
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <BrushIcon
                  color="secondary"
                  fontSize="large"
                  className="mx-2"
                />
                <Typography
                  variant="h6"
                  color="primary"
                  component="h6"
                  className="font-medium"
                >
                  Digital Art
                </Typography>
              </div>
              <div className="icon-text">
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
