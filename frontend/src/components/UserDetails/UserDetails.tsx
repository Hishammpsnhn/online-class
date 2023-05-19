import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Paper } from '@material-ui/core';
import { Avatar, Typography } from '@mui/material';
import useStyles from './styles';

export default function UserDetails() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h4'>Hisham</Typography>
        <Avatar>H</Avatar>

      </Stack>
      <Typography variant='h5'>Class 5</Typography>
      <Typography variant='h5'>Gvhss school</Typography>
    </Paper>
  );
}
