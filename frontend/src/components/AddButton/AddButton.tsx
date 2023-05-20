import { Button } from "@mui/material";
import React, { MouseEvent } from "react";
interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AddButton = ({onClick}:ButtonProps) => {
  return(
    <Button variant="contained" style={{margin:'10px'}} onClick={onClick}>ADD +</Button>
  );
};

export default AddButton;
