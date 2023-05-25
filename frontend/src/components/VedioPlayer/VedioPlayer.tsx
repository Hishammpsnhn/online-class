import React from "react"; 
import { CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import { Card } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
interface Props {
  title: string;
  description: string;
  url: string;
}

const VedioPlayer = ({description,title,url}:Props) => {
  console.log(url)
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }}>
        <CardActionArea>

          <CardMedia
            component='iframe'
            title='test'
            src={url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" >
             {description}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>

    </Grid>
  );
};

export default VedioPlayer;
