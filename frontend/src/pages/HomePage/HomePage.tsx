import React from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import { Container } from "@material-ui/core";
import Subjects from "../../components/Subjects/Subjects";
import Grid from '@mui/material/Grid';

const HomePage = () => {
  return (
    <Container>
      <UserDetails/>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Subjects/>
      <Subjects/>
      <Subjects/>
      <Subjects/>
      </Grid>
    </Container>
  );
};

export default HomePage;
