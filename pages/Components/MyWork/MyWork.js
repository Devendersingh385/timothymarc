import React from "react";
import WorkList from "./WorkList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const MyWork = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, background:' #181818', padding: '90px 30px' }} className="text-center">
        <Container maxWidth="">
          <Grid 
            container spacing={0} display="flex" alignItems="center" justifyContent="center" flexWrap="nowrap">                     
              <WorkList />
          </Grid>  
        </Container>
      </Box>
    </>
  );
};

export default MyWork;
