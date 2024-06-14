import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      background: 'url("https://wallpapercave.com/wp/6SLzBEY.jpg") no-repeat left top',
      backgroundSize: 'cover',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    text: {
      textAlign: 'center',
      zIndex: 1,
      color: '#ffffff',
    },
    h1: {
      color: '#011718',
      marginTop: '-200px',
      fontSize: '15em',
      textShadow: '-5px 5px 0px rgba(0,0,0,0.7), -10px 10px 0px rgba(0,0,0,0.4), -15px 15px 0px rgba(0,0,0,0.2)',
      fontFamily: 'monospace',
      fontWeight: 'bold',
    },
    h2: {
      color: 'black',
      fontSize: '5em',
      textShadow: '-5px 5px 0px rgba(0,0,0,0.7)',
      marginTop: '-150px',
      fontFamily: 'monospace',
      fontWeight: 'bold',
    },
    h3: {
      color: 'white',
      marginLeft: '30px',
      fontSize: '2em',
      textShadow: '-5px 5px 0px rgba(0,0,0,0.7)',
      marginTop: '-40px',
      fontFamily: 'monospace',
      fontWeight: 'bold',
    },
    torch: {
      margin: '-150px 0 0 -150px',
      width: '200px',
      height: '200px',
      boxShadow: '0 0 0 9999em #000000f7',
      opacity: 1,
      borderRadius: '50%',
      position: 'fixed',
      background: 'rgba(0,0,0,0.3)',
      '&:after': {
        content: '""',
        display: 'block',
        borderRadius: '50%',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        boxShadow: 'inset 0 0 40px 2px #000, 0 0 20px 4px rgba(13,13,10,0.2)',
      },
    },
  }));




const NotFound = () => {const classes = useStyles();

  const handleMouseMove = (event) => {
    const torch = document.querySelector(`.${classes.torch}`);
    if (torch) {
      torch.style.top = `${event.pageY}px`;
      torch.style.left = `${event.pageX}px`;
    }
  };

  return (
    <div className={classes.root} onMouseMove={handleMouseMove}>
      <Box className={classes.text}>
        <Typography variant="h1" className={classes.h1}>
          404
        </Typography>
        <Typography variant="h2" className={classes.h2}>
          Uh, Ohh
        </Typography>
        <Typography variant="h3" className={classes.h3}>
          Sorry we can't find what you are looking for 'cuz it's so dark in here
        </Typography>
      </Box>
      <div className={classes.torch}></div>
    </div>
  );
}

export default NotFound