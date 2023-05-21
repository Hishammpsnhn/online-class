import React from "react";
import { Skeleton } from "@mui/material";

const ClassSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.400' }}
            style={{margin:'auto',maxWidth:'500px',marginTop:'20px'}}
            animation='pulse'
            variant="rounded"
            height={100}
        />
    );
};

export default ClassSkeleton;
