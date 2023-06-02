import React, { useEffect, useContext } from "react";
import UserDetails from "../../components/UserDetails/UserDetails";
import { Container } from "@material-ui/core";
import Subjects from "../../components/Subjects/Subjects";
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { GET_Subjects } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import AlertIndicate from "../../components/Alert/AlertIndicate";
import SubjectSkeleton from "../../components/Skeleton/SubjectSkeleton";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate()
console.log(user)
  const { loading, error, data, refetch } = useQuery(GET_Subjects, {
    variables: { id: user?.stdID },
  });

  const handleClick = (id: string) => {
    navigate(`/vedios/${id}`);
  }

  useEffect(() => {
    if (user?.isAdmin) {
      navigate("/admin")
    } else {
      refetch()
    }
  }, [user, navigate, refetch]);


  return (
    <Container>
      {user ? (
        <>
          <UserDetails />
          {error ? <AlertIndicate type="error" error={error} /> : (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                loading ? (
                  Array(6).fill(null).map((_, index) => (
                    <SubjectSkeleton key={index} />
                  ))
                ) : (
                  data.subjects.map((item: { id: string, subject: string }) => (
                    <Subjects key={item.id} id={item.id} name={item.subject} onClick={handleClick} />
                  ))
                )
              }

            </Grid>
          )}
        </>
      ) : (
        <div>Loader ......</div>
      )}

    </Container>
  );
};

export default HomePage;
