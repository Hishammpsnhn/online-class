import { Container, Grid } from "@mui/material";
import React from "react";
import VedioPlayer from "../../components/VedioPlayer/VedioPlayer";
import AddButton from "../../components/AddButton/AddButton";

const AdminVedios = () => {
  return (
    <Container>
      <AddButton />
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />
        <VedioPlayer />


      </Grid>
    </Container>
  );
};

export default AdminVedios;
