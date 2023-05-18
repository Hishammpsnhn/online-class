import { makeStyles, Theme } from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
    container: {
        height: '100vh',
        background: ' linear-gradient(to bottom, #009999 0%, #00ff99 100%)',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
    },
    paper: {
        minWidth: '200px',
        padding: '20px 10px',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

    },
}));