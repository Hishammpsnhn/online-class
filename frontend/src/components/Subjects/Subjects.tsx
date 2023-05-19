import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import englisth from '../../images/images.jpg'
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Subjects = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/vedios')
    }
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345 }} style={{margin:'auto'}} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={englisth}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            English
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Subjects;
