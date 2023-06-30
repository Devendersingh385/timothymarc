import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Subscribe = () => {
  return (
    <>
      <Box className="pb-16">
        <Container maxWidth="xl">
          <Grid container spacing={0}>
            <Grid item xs={12} lg={4}>
              <Button
                size="large"
                variant="outlined"
                href='https://timothymarc.com/get-started/'
                sx={{
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  border: "2px solid #000",
                  padding: "10px 30px 12px 32px",
                  textAlign: "center",
                  lineHeight: 1,
                  fontWeight: 400,
                  borderRadius: 0,
                  letterSpacing: ".1em",
                  marginTop: "25px",
                  transition: "all .4s ease",
                  textTransform: "capitalize",
                  color: "#000",
                  transform: 'scale(.9)',
                  "&:hover": {
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "2px solid #000",
                  },
                }}
              >
               Get Started
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Subscribe;
