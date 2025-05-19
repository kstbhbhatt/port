import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  LinearProgress,
} from "@mui/material";
const Resume = () => {
  const line = "w-6 block border-b-4 border-b-[#F85C70]";
  return (
    <section id="resume">
      <Box className="py-5">
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
          Resume
        </Typography>
        <Box className="flex lg:flex-row flex-col gap-3 mt-5">
          <Box className="w-full lg:w-1/3">
            <Card variant="outlined">
              <CardHeader
                title={
                  <Box>
                    <Typography variant="h3" color="primary" component="h3">
                      Experience
                    </Typography>
                    <span className={line} />
                  </Box>
                }
              ></CardHeader>
              <CardContent className="card-content">
                {/* <List> */}
                {/* First Position - Consultant */}
                <Box>
                  <Typography
                    variant="p"
                    color="primary"
                    component="p"
                    className="text-xl font-semibold"
                  >
                    Consultant (Frontend Developer)
                  </Typography>
                  <Typography
                    variant="p"
                    color="secondary"
                    component="p"
                    className="text-md font-normal"
                  >
                    May 2025 - Present
                  </Typography>
                </Box>
                <ListItem>
                  <List className=" h-full lg:max-h-[400px] lg:overflow-auto">
                    <ListItem divider className="text-sm font-normal">
                      Working as an Angular developer on a B2B commerce
                      application, implementing responsive UI components and
                      complex business logic.
                    </ListItem>
                    <ListItem divider className="text-sm font-normal">
                      Collaborating with cross-functional teams to deliver
                      high-quality features that enhance the B2B commerce
                      experience.
                    </ListItem>
                  </List>
                </ListItem>

                {/* Second Position - Analyst */}
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="p"
                    color="primary"
                    component="p"
                    className="text-xl font-semibold"
                  >
                    Analyst (Frontend Developer)
                  </Typography>
                  <Typography
                    variant="p"
                    color="secondary"
                    component="p"
                    className="text-md font-normal"
                  >
                    Sept 2022 - May 2025
                  </Typography>
                </Box>
                <List className=" h-full lg:h-[400px] lg:overflow-auto">
                  <ListItem divider className="text-sm font-normal">
                    Managed and resolved all SIT and UAT defects, ensuring a
                    smooth and successful product launch.
                    <br />
                    Provided on-site UAT support, contributing to the project's
                    timely and successful completion.
                  </ListItem>

                  <ListItem>
                    Migrated the system to React-table and developed essential
                    components like tooltips and custom button variations,
                    boosting performance and user engagement.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Refactored codebase for efficiency and maintainability,
                    creating reusable components and documenting VM setup to
                    streamline onboarding.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Mentored team members, fostering collaboration and
                    maintaining high coding standards, leading to improved
                    operational efficiency.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Solely led the development of a PoC for an innovative DevOps
                    tool leveraging ChatGPT and GenAI, automating code
                    generation for DevOps pipelines and providing instant
                    answers to DevOps related queries.
                    <br />
                    Contributed to the Vision AI initiative, transforming hand
                    drawn architecture images into executable code,
                    demonstrating the potential of AI in software development.
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
          <Box className="w-full lg:w-1/3">
            <Card variant="outlined">
              <CardHeader
                title={
                  <Box>
                    <Typography variant="h3" color="primary" component="h3">
                      Education
                    </Typography>
                    <span className={line} />
                  </Box>
                }
              ></CardHeader>
              <CardContent className="card-content">
                <List>
                  <Box>
                    <Typography
                      variant="p"
                      color="primary"
                      component="p"
                      className="text-xl font-semibold"
                    >
                      B. Tech Electrical Engineering
                    </Typography>
                    <p className="designation">
                      National Institue Of Technology, Hamirpur
                    </p>
                  </Box>
                  <ListItem
                    divider
                    className="flex-col"
                    alignItems="flex-start"
                  >
                    <Typography
                      variant="p"
                      color="secondary"
                      component="p"
                      className="text-md font-normal"
                    >
                      2018 - 2022
                    </Typography>
                    <Typography
                      variant="p"
                      color="primary"
                      component="p"
                      className="text-sm font-normal"
                    >
                      Graduated with a bachelor's of Technology in Electrical
                      Engineering from National Institute of Technology,
                      Hamirpur with a CGPI of 8.77.
                    </Typography>
                  </ListItem>
                  <Box className="mt-2">
                    <Typography
                      variant="p"
                      color="primary"
                      component="p"
                      className="text-xl font-semibold"
                    >
                      High School
                    </Typography>
                    <p className="designation">
                      Dayanand Public School, Shimla
                    </p>
                  </Box>
                  <ListItem className="flex-col" alignItems="flex-start">
                    <Typography
                      variant="p"
                      color="secondary"
                      component="p"
                      className="text-md font-normal"
                    >
                      2016 - 2018
                    </Typography>
                    <Typography
                      variant="p"
                      color="primary"
                      component="p"
                      className="text-sm font-normal"
                    >
                      Completed High School Education from Dayanand Public
                      School, Shimla with a %age of 91.6.
                    </Typography>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
          <Box className="w-full lg:w-1/3">
            <Card variant="outlined" className="mb-5">
              <CardHeader
                title={
                  <Box>
                    <Typography variant="h3" color="primary" component="h3">
                      Skills
                    </Typography>
                    <span className={line} />
                  </Box>
                }
              ></CardHeader>
              <CardContent className="card-content">
                <List>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      HTML
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={72}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      CSS
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={79}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      JavaScript
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      TypeScript
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={50}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      React
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={72}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      Angular
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={30}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardHeader
                title={
                  <Box>
                    <Typography
                      variant="div"
                      color="primary"
                      component="div"
                      className="text-2xl font-semibold"
                    >
                      Languages
                    </Typography>
                    <span className={line} />
                  </Box>
                }
              ></CardHeader>
              <CardContent className="card-content">
                <List>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      English
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={80}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                  <ListItem className="flex-col px-0" alignItems="flex-start">
                    <Typography
                      variant="h6"
                      color="primary"
                      component="h6"
                      className=""
                    >
                      Hindi
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={90}
                      color="secondary"
                      sx={{ height: 6, borderRadius: 3, width: "100%" }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
export default Resume;
