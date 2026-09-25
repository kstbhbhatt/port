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
                {/* First Position - Software Engineer II */}
                <Box>
                  <Typography
                    variant="p"
                    color="primary"
                    component="p"
                    className="text-xl font-semibold"
                  >
                    Software Engineer II
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
                <List className=" h-full lg:max-h-[400px] lg:overflow-auto">
                  <ListItem divider className="text-sm font-normal">
                    Achieved a 15% improvement in system scalability and
                    workflow efficiency by architecting responsive Angular UI
                    components and complex business logic for a high-traffic B2B
                    commerce application.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Decreased cart abandonment and minimized transaction
                    friction by streamlining checkout functionality through the
                    integration of a secure payment workflow.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Restored system stability and reduced critical UI/API bugs
                    by 25% by spearheading rigorous frontend defect triage,
                    root-cause analysis, and rapid bug resolution.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Elevated overall code quality and sprint velocity by
                    mentoring and directing an 8+ member frontend team, ensuring
                    consistent feature delivery through strict code reviews and
                    Angular best practices.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Increased deployment success rate by 65% by driving
                    cross-functional collaboration and alignment between QA,
                    backend, and product teams.
                  </ListItem>
                </List>

                {/* Second Position - Front End Developer (Analyst) */}
                <Box sx={{ mt: 3 }}>
                  <Typography
                    variant="p"
                    color="primary"
                    component="p"
                    className="text-xl font-semibold"
                  >
                    Front End Developer (Analyst)
                  </Typography>
                  <Typography
                    variant="p"
                    color="secondary"
                    component="p"
                    className="text-md font-normal"
                  >
                    Sep 2022 - May 2025
                  </Typography>
                </Box>
                <List className=" h-full lg:h-[400px] lg:overflow-auto">
                  <ListItem divider className="text-sm font-normal">
                    Minimized production downtime by 25% and resolved 90+
                    critical defects by directing a 5-developer team and serving
                    as the primary technical escalation point during critical
                    on-site B2B product launches.
                  </ListItem>

                  <ListItem divider className="text-sm font-normal">
                    Reduced developer onboarding time by 45% and accelerated new
                    feature delivery by engineering a config-driven React Table
                    using TanStack Table, successfully modernizing 50% of the
                    platform's UI.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Increased user engagement by 30% and reduced UI development
                    effort by 50% by leading comprehensive UI redesign
                    initiatives and implementing a reusable, cross-team
                    component library.
                  </ListItem>
                  <ListItem divider className="text-sm font-normal">
                    Reduced initial rendering time by 2 seconds by optimizing
                    frontend load performance via lazy loading and extensive
                    code refactoring within core B2B commerce modules (Cart and
                    Pricing).
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
