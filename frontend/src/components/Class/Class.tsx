import { Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import useStyles from './styles';


const Class = () => {
    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.card} >
            <CardActionArea>
                <Typography variant="h6" color='whitesmoke' className={classes.typographt}>Class 1</Typography>
            </CardActionArea>
        </Card>
    );
};

export default Class;
