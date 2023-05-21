import { Skeleton } from "@mui/material";
import React from "react";

const ClassSkeleton = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.400' }}
            style={{margin:'auto',maxWidth:'500px'}}
            animation='pulse'
            variant="rounded"
            height={100}
        />
    );
};

export default ClassSkeleton;
