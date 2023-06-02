import React,{useContext} from 'react';
import Stack from '@mui/material/Stack';
import { Paper } from '@material-ui/core';
import { Avatar, Typography } from '@mui/material';
import useStyles from './styles';
import { UserContext } from '../../context/UserContext';

export default function UserDetails() {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return (
    <Paper className={classes.paper}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography variant='h4' textTransform='capitalize'>{user?.name}</Typography>
        <Avatar>{user?.name.charAt(0)}</Avatar>

      </Stack>
      <Typography variant='h5'>Class {user?.std}</Typography>
    </Paper>
  );
}
