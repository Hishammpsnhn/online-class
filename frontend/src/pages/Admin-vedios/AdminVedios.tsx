import { Container, Grid } from "@mui/material";
import React from "react";
import VedioPlayer from "../../components/VedioPlayer/VedioPlayer";
import AddButton from "../../components/AddButton/AddButton";
import ModalAdd from "../../components/Modal/ModalAdd";

const AdminVedios = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addVedio = ()=>{
      handleOpen()
  }
  const addVedioHandler =()=>{

  }
  return (
    <Container>
      <AddButton onClick={addVedio} />
      <ModalAdd type="vedio" open={open} handleClose={handleClose} submit={addVedioHandler}/>
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
