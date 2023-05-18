import { CardMedia, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const VedioPlayer = () => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Paper style={{padding:'10px 20px'}}>
      <CardMedia
        component='iframe'
        title='test'
        src='https://www.youtube.com/embed/aqz-KE-bpKQ'
        />
      <Typography>vedio 0</Typography>
        </Paper>
    </Grid>
  );
};

export default VedioPlayer;
