import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LinkButton from "../Buttons/LinkButton";
import Image from "next/image";

const BootCampEvent = ({ title, url }) => {
  return (
    <>
      <Box>
        <Container
          maxWidth=""
          spacing={{ xs: 0, md: 0 }}
          sx={{
            padding: 0,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={6} className="overflow-hidden">
              <Card
                className="overflow-hidden relative"
                sx={{
                    Height: '535px',
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
                   src='/bootcamp.jpg' 
                   alt=''
                   width={1020}
                   height={535}
                   className='mx-auto'
                />
                <CardContent
                  className="text-center flex items-center flex-col absolute top-0 bottom-0 left-0 right-0"
                  sx={{ padding: "96px 0", maxWidth: '490px', margin: '0 auto' }}
                >
                  <Typography
                    className="text-white"
                    mt={{ xs: 8, sm: 8 }}                    
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Didot !important",
                      lineHeight: 1.714,
                    }}
                  >
                    <i>Start with the</i>
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-white tracking-wider"
                    sx={{
                      fontSize: "43px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    03 DAY BOOTCAMP
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
                    How Tim Built A Business That Funds A Life Of Freedom Fun
                    And Adventure
                  </Typography>

                  <LinkButton
                    title="More"
                    url="https://timothymarc.com/get-started"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} className="overflow-hidden">
              <Card
                className="overflow-hidden relative"
                sx={{
                    Height: '535px',
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
                   src='/bootcamp-1.jpg' 
                   alt=''
                   width={1020}
                   height={535}
                   className='mx-auto'
                />
                <CardContent
                  className="text-center flex items-center flex-col absolute top-0 bottom-0 left-0 right-0"
                  sx={{ padding: "96px 0", maxWidth: '490px', margin: '0 auto' }}
                >
                  <Typography
                    className="text-white"
                    sx={{
                      fontSize: "30px",
                      fontFamily: "Didot !important",
                      lineHeight: 1.714,
                    }}
                  >
                    <i>Join the</i>
                  </Typography>
                  <Typography
                    variant="h3"
                    className="text-white tracking-wider"
                    sx={{
                      fontSize: "43px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    SECRET SOCIETY <br className="hidden lg:block" /> MASTERMIND
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
                    Join The Worlds #1 Private Entrepreneurship Community Of
                    Successful Freedom Business Builders
                  </Typography>
                 
                  <LinkButton
                    title="More"
                    url="https://officialsecretsociety.com/"
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BootCampEvent;
