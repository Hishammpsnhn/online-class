import { Container, Grid } from "@mui/material";
import React from "react";
import VedioPlayer from "../../components/VedioPlayer/VedioPlayer";
import AddButton from "../../components/AddButton/AddButton";
import ModalAdd from "../../components/Modal/ModalAdd";
import { GET_Vedios } from "../../graphql/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import SubjectSkeleton from "../../components/Skeleton/SubjectSkeleton";
import Subjects from "../../components/Subjects/Subjects";

const AdminVedios = () => {
  const [open, setOpen] = React.useState(false);

  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_Vedios, {
    variables: { id: id },
  });
  console.log(data, error);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addVedioModel = () => {
    handleOpen()
  }
  const addVedioHandler = () => {

  }
  return (
    <Container>
      <AddButton onClick={addVedioModel} />
      <ModalAdd type="vedio" open={open} handleClose={handleClose} submit={addVedioHandler} />

      {error ? <AlertIndicate type="error" error={error} /> : (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            loading ? (
              Array(6).fill(null).map((_, index) => (
                <SubjectSkeleton key={index} />
              ))
            ) : (
              data.vedios.map((item: { id: string, title: string, description: string, url: string }) => (
                <VedioPlayer key={item.id} title={item.title} description={item.description} url={item.url} />
              ))
            )
          }

        </Grid>



      )}

      {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <VedioPlayer />
      </Grid> */}
    </Container>
  );
};

export default AdminVedios;
