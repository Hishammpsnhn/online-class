import { Container } from "@material-ui/core";
import React from "react";
import VedioPlayer from "../../components/VedioPlayer/VedioPlayer";
import Grid from '@mui/material/Grid';
import UserDetails from "../../components/UserDetails/UserDetails";

const VedioPage = () => {
  return (
    <Container>
       <UserDetails/>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
          <VedioPlayer/>
      
        
      </Grid>
    </Container>
  );
};

export default VedioPage;
