import { CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import React from "react";

const VedioPlayer = () => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
        <CardActionArea>
          <CardMedia
            component='iframe'
            title='test'
            src='https://www.youtube.com/embed/aqz-KE-bpKQ'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Chapter x
            </Typography>
            <Typography variant="body2" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </Grid>
  );
};

export default VedioPlayer;
