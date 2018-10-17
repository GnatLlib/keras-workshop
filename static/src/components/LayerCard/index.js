import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

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
    },
    cardContent: {
        height: 220
    },
    cardActions: {
        color: "darkgray"
    },
    dragHandle: {
        position: "absolute",
        top: 0,
        right: 10
    }
});

const activations = [
    {
        value: "softmax",
        label: "Softmax"
    },
    {
        value: "relu",
        label: "ReLu"
    },
    {
        value: "tanh",
        label: "TanH"
    },
    {
        value: "sigmoid",
        label: "Sigmoid"
    },
    {
        value: "linear",
        label: "Linear"
    }
];
class LayerCard extends Component {
    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            config: props.config
        };
    }

    handleChange = name => event => {
        console.log(event.target.value);
        this.setState({
            config: {
                ...this.state.config,
                [name]: event.target.value
            }
        });
    };
    render() {
        const { classes, class_name } = this.props;

        const {
            config: { activation, activity_regularizer, dtype, name, units }
        } = this.state;

        console.log(this.state);
        return (
            <Card className={classes.cardFrame}>
                <div className={classes.cardHeader}>
                    <TextField
                        className="drag-cancel"
                        onClick={e => {
                            e.stopPropagation();
                        }}
                        id="outlined-name"
                        label="Name"
                        value={this.state.config.name}
                        onChange={this.handleChange("name")}
                        margin="dense"
                        variant="outlined"
                    />
                </div>
                <CardContent className={classes.cardContent}>
                    <TextField
                        id="select-activation"
                        select
                        label="Activation"
                        className="drag-cancel"
                        value={activation}
                        onChange={this.handleChange("activation")}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        helperText="Select the activation function"
                        margin="dense"
                        variant="outlined"
                    >
                        {activations.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div> {activity_regularizer} </div>
                    <div> {dtype} </div>
                    <div> {units} </div>
                </CardContent>
                <CardActions
                    className={classes.cardActions}
                    disableActionSpacing
                >
                    <IconButton>
                        <Icon>delete</Icon>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(LayerCard);
