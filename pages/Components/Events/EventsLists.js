import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LinkButton from "../Buttons/LinkButton";
import Image from "next/image";


const EventsLists = () => {
  return (
    <>
      <Box        
        className="pb-16 mt-48"
      >
        <Container
          maxWidth=""
          spacing={{ xs: 0, md: 0 }}
          sx={{
            padding: 0,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={4}>
              <Card
                className="overflow-hidden border-0 rounded-none shadow-none relative"
                sx={{
                    height: '570px',
                    padding: '0',
                    borderRadius: 0,
                    boxShadow: "unset",
                    transition: "transform 3s ease,-webkit-transform 3s ease",
                    "& img": {
                      transition: "transform 3s ease,-webkit-transform 3s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.03)",
                    }  
                }}
              >
                <Image 
                   src='/event-1.jpg' 
                   alt=''
                   width={995}
                   height={570}
                   className='mx-auto h-full'
                />
                <CardContent
                  className="text-center flex items-center flex-col absolute top-0 bottom-0 left-0 right-0"
                  sx={{ padding: "96px 56px" }}
                >
                  <Typography
                    className="text-white"
                    mt={{ xs: 2, sm: 2  }}
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Didot !important",
                      lineHeight: 1.714,
                    }}
                  >
                    <i>Past Event</i>
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-white tracking-wider"
                    sx={{
                      fontSize: "30px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    FREEDOM BUSINESS <br className="sm:hidden lg:block" />{" "}
                    THAILAND
                  </Typography>
                  <Typography
                    variant="h5"
                    className="text-white tracking-wider"
                    sx={{ fontSize: "26px", marginTop: "5px" }}
                  >
                    25.01.13
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="text-white"
                    sx={{
                      margin: "15px 50px",
                      fontSize: "17px",
                      lineHeight: 1.5,
                    }}
                  >
                    In 2013 we ventured to Thailand for our first ever SSM
                    Freedom Trip. Over 30 members joined us for an incredible
                    experience, with many meeting each other face to face for
                    the first time.
                  </Typography>
                  <LinkButton title='MORE' url='/event/6/thailand-2013' />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card
                className="overflow-hidden border-0 rounded-none shadow-none relative"
                sx={{
                    height: '570px',
                    padding: '0',
                    borderRadius: 0,
                    boxShadow: "unset",
                    transition: "transform 3s ease,-webkit-transform 3s ease",
                    "& img": {
                      transition: "transform 3s ease,-webkit-transform 3s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.03)",
                    }  
                }}
              >
                <Image 
                   src='/event-2.jpg' 
                   alt=''
                   width={995}
                   height={570}
                   className='mx-auto h-full'
                />
                <CardContent
                  className="text-center flex items-center flex-col absolute top-0 bottom-0 left-0 right-0"
                  sx={{ padding: "96px 56px" }}
                >
                  <Typography
                    className="text-white"
                    mt={{ xs: 2, sm: 2  }}
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Didot !important",
                      lineHeight: 1.714,
                    }}
                  >
                    <i>Past Event</i>
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-white tracking-wider"
                    sx={{
                      fontSize: "30px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    FREEDOM BUSINESS
                    <br className="sm:hidden lg:block" /> GREEK ISLANDS
                  </Typography>
                  <Typography
                    variant="h5"
                    className="text-white tracking-wider"
                    sx={{ fontSize: "26px", marginTop: "5px" }}
                  >
                    02.09.13
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="text-white"
                    sx={{
                      margin: "15px 50px",
                      fontSize: "17px",
                      lineHeight: 1.5,
                    }}
                  >
                    The beautiful backdrop of pristine beaches and pure-blue
                    water set the scene for our 2013 Conference in the Greek
                    Islands.
                  </Typography>
                  <LinkButton title='MORE' url='/event/5/greek-islands-2013' />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card
                className="overflow-hidden relative"
                sx={{
                    height: '570px',
                    padding: '0',
                    borderRadius: 0,
                    boxShadow: "unset",
                    transition: "transform 3s ease,-webkit-transform 3s ease",
                    "& img": {
                      transition: "transform 3s ease,-webkit-transform 3s ease",
                    },
                    "&:hover img": {
                      transform: "scale(1.03)",
                    }  
                }}
              >
                <Image 
                   src='/event-3.jpg' 
                   alt=''
                   width={995}
                   height={570}
                   className='mx-auto h-full'
                />
                <CardContent
                  className="text-center flex items-center flex-col absolute top-0 bottom-0 left-0 right-0"
                  sx={{ padding: "96px 56px" }}
                >
                  <Typography
                    className="text-white"
                    mt={{ xs: 2, sm: 2  }}
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Didot !important",
                      lineHeight: 1.714,
                    }}
                  >
                    <i>Past Event</i>
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-white tracking-wider"
                    sx={{
                      fontSize: "30px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    FREEDOM BUSINESS
                    <br className="sm:hidden lg:block" /> BULGARIA
                  </Typography>
                  <Typography
                    variant="h5"
                    className="text-white tracking-wider"
                    sx={{ fontSize: "26px", marginTop: "5px" }}
                  >
                    09.02.15
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="text-white"
                    sx={{
                      margin: "15px 50px",
                      fontSize: "17px",
                      lineHeight: 1.5,
                    }}
                  >
                    In 2015 over 120 members joined us at a fantastic ski-resort
                    in Bankso, Bulgaria. There were so many of us that we booked
                    out an entire wing of the resort.
                  </Typography>
                  <LinkButton title='MORE' url='/event/3/bulgaria-2015' />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EventsLists;
