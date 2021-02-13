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

function generateUniqueNumber() {
  return new Date().valueOf(); 
}

export default function SpacingGrid(props) {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  //const {id, title, userId} = this.props.shopList;
  

    return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={spacing}>
              {[0].map((value, idx) => (
                  <Grid key={idx} item> 
                  {props.shopList.map((shop, idx2) => 
                    <Paper className="paper-style" key={idx2}> 
                      <h1 id={shop.id}>
                        {shop.name}
                      </h1>  
                      </Paper>
                    )}   
                  </Grid>
              ))}
              </Grid>
          </Grid>
      </Grid>
    );
}


