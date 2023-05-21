import { Card, CardActionArea, Typography } from "@mui/material";
import React from "react";
import useStyles from './styles';
import { useNavigate } from "react-router-dom";

interface Props {
    id:number
    std:number
}

const Class = ({id,std}:Props) => {

    const classes = useStyles();
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/admin/subject/${id}`)
    }
    return (
        <Card elevation={3} className={classes.card} onClick={handleClick} >
            <CardActionArea>
                <Typography variant="h6" color='whitesmoke' className={classes.typographt}>Class {std}</Typography>
            </CardActionArea>
        </Card>
    );
};

export default Class;
