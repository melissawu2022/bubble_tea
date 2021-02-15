import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./SpacingGrid.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        height: 200,
        width: 200
    },
    control: {
        padding: theme.spacing(2)
    }
}));

export default function SpacingGrid(props) {
    const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0].map((idx) => (
                        <Grid key={idx} item>
                            <Shop shop={props}/>
                            {props.shopList.map((shop, idx2) => (
                                <Paper className="paper-style" key={idx2}>
                                    <h1 className="spacing-grid-paper-h1"> {shop.name} </h1>
                                    <h2 className="spacing-grid-paper-h2">Rating: {shop.rating}</h2>
                                    <img className="bbt-image" src={shop.image_url}/>
                                </Paper>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
