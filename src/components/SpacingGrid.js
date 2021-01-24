import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './SpacingGrid.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(5);
  const classes = useStyles();
  

    return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                  <Grid key={value} item>
                    <Paper className={classes.paper} style={{fontFamily: 'Courier New ', textAlign:"center"}}> xs=3</Paper>
                  </Grid>
              ))}
              </Grid>
          </Grid>
      </Grid>
    );
}


