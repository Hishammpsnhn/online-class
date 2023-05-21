import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const SubjectSkeleton = () => {
    return (
        <Grid item xs={12} sm={4} md={4} >
            <Stack spacing={1} >
                <Skeleton variant="rounded"  height={190} />
                <Skeleton variant="text"  sx={{ fontSize: '2rem' }} />
            </Stack>
        </Grid>
    );
};

export default SubjectSkeleton;
