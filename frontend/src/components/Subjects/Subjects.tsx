import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

interface Props {
    id:number
    name:string
    url:string
}

const Subjects = ({id,name,url}:Props) => {
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
                        image={url}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div"  textTransform="uppercase">
                            {name}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Subjects;
