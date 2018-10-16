import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    cardFrame: {
        height: "100%"
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 24,
        paddingRight: 24
    }
});

class LayerCard extends Component {
    render() {
        const {
            classes,
            class_name,
            config: { activation, activity_regularizer, dtype, name, units }
        } = this.props;

        return (
            <Card className={classes.cardFrame}>
                <div className={classes.cardHeader}>
                    <TextField
                        id="outlined-name"
                        label="Name"
                        value={name}
                        onChange={e => {
                            console.log(e);
                        }}
                        margin="dense"
                        variant="outlined"
                    />
                </div>
                <CardContent>
                    <div> {activation} </div>
                    <div> {activity_regularizer} </div>
                    <div> {dtype} </div>
                    <div> {units} </div>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(LayerCard);
