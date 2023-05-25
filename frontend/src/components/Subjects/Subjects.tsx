import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@material-ui/core';
import englishImage from '../../images/english.jpg'
import mathsImage from '../../images/maths.jpg';

interface Props {
    id: string
    name: string
    onClick: (id:string) => void
}
interface SubjectImages {
    [key: string]: string;
  }

const Subjects = ({ id, name,onClick }: Props) => {
 
    const subjectImages:SubjectImages = {
        english: englishImage,
        maths: mathsImage,
    };
    const handleClick = () =>{
        onClick(id)
    }


    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345 }} style={{ margin: 'auto' }} onClick={handleClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={subjectImages[name]}
                        alt={name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" textTransform="uppercase">
                            {name}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Subjects;
