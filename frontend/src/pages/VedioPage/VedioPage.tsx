import { Container } from "@material-ui/core";
import React from "react";
import VedioPlayer from "../../components/VedioPlayer/VedioPlayer";
import Grid from '@mui/material/Grid';
import UserDetails from "../../components/UserDetails/UserDetails";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import SubjectSkeleton from "../../components/Skeleton/SubjectSkeleton";
import { useQuery } from "@apollo/client";
import { GET_Vedios } from "../../graphql/queries";
import { useParams } from "react-router-dom";

const VedioPage = () => {
  
  const { id } = useParams<{ id: string }>();

  const { loading, error, data,refetch } = useQuery(GET_Vedios, {
    variables: { id: id },
  });
  return (
    <Container>
      <UserDetails />
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
    </Container>
  );
};

export default VedioPage;
