import React from "react";
import { AlertTitle } from "@mui/material";
import Alert, { AlertColor } from '@mui/material/Alert';
import { ApolloError } from "@apollo/client";

interface Props {
    type: AlertColor;
    error:ApolloError;
}
const AlertIndicate = ({type,error}:Props) => {
    return (
        <Alert severity={type}>
            <AlertTitle>{error.name}</AlertTitle>
            {error.message}— <strong>check it out!</strong>
        </Alert>
    );
};

export default AlertIndicate;
