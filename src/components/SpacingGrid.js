import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./SpacingGrid.css";
import Shop from "./Shop";

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
                            
                            {props.shopList.map((shop, idx2) => (
                                <Shop shop={shop} key={idx2} />
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
