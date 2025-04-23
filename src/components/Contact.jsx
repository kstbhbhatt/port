import { useState } from "react";
import Link from "next/link";
import Banner from "./Banner";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  TextField,
} from "@mui/material";

const line = "w-10 block border-b-4 border-b-[#F85C70]";
const Contact = () => {
  const [messageTxt, setMessageTxt] = useState("Wtite your message here...");
  return (
    <Banner>
      <section id="contact" className="feedback">
        <div className="flex gap-3 flex-col lg:flex-row">
          <Card variant="outlined" className="w-full lg:w-2/3">
            <CardHeader
              title={
                <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    component="h3"
                    className="text-2xl font-semibold"
                  >
                    Send a Message
                  </Typography>
                  <span className={line} />
                </Box>
              }
            ></CardHeader>
            <CardContent className="card-content">
              <TextField
                multiline
                fullWidth
                id="fullWidth"
                minRows={8}
                onChange={(e) => {
                  setMessageTxt(e.target.value);
                }}
                value={messageTxt}
              />
            </CardContent>
            <CardActions>
              <Button
                className="w-fit"
                component="label"
                role={undefined}
                variant="outlined"
                color="secondary"
                tabIndex={-1}
                onClick={() => {
                  window.location.href = `mailto:kstbhbhatt@gmail.com?cc=kaubhatt@deloitte.com&subject=Write desired Subject&body=${encodeURI(
                    messageTxt
                  )}`;
                }}
              >
                Send Message
              </Button>
            </CardActions>
          </Card>
          <Card variant="outlined" className="w-full lg:w-1/3">
            <CardHeader
              title={
                <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    component="h3"
                    className="text-2xl font-semibold"
                  >
                    Get in touch
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
                    Email :
                  </Typography>{" "}
                  <Typography color="secondary" component="span">
                    <Link href="mailto:kstbhbhatt@gmail.com">
                      {" "}
                      kstbhbhatt@gmail.com
                    </Link>
                  </Typography>
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
                    <FacebookIcon color="primary" fontSize="medium" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/kstbhbhatt" target="_blank">
                    <XIcon color="primary" fontSize="medium" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/kstbhbhatt"
                    target="_blank"
                  >
                    <InstagramIcon color="primary" fontSize="medium" />
                  </a>
                </li>
                <li>
                  <a href="https://www.github.com/kstbhbhatt" target="_blank">
                    <GitHubIcon color="primary" fontSize="medium" />
                  </a>
                </li>
              </ul>
            </CardActions>
          </Card>
        </div>
      </section>
    </Banner>
  );
};
export default Contact;
