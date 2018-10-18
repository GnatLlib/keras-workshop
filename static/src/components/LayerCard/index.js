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
import classNames from "classnames";

const styles = theme => ({
    cardFrame: {
        overflow: "visible",
        height: "100%",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow:
                "1px 3px 3px 0px rgba(0, 0, 0, 0.2), 1px 3px 1px 0px rgba(0, 0, 0, 0.14), 1px 2px 3px -1px rgba(0, 0, 0, 0.12)"
        },
        transition: "0.2s"
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
    },
    addIcon: {
        position: "absolute",
        top: "45.5%",
        right: -20,
        transition: "0.2s"
    },
    hidden: {
        opacity: 0
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

        this.state = {
            config: props.config,
            hover: false
        };
    }

    handleChange = name => event => {
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

        return (
            <Card
                className={classes.cardFrame}
                onMouseOver={e => {
                    this.setState({
                        hover: true
                    });
                }}
                onMouseLeave={e => {
                    this.setState({
                        hover: false
                    });
                }}
            >
                <div
                    className={classNames({
                        [classes.addIcon]: true,
                        [classes.hidden]: !this.state.hover
                    })}
                >
                    <IconButton>
                        <Icon>add_circle</Icon>
                    </IconButton>
                </div>

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
                    <IconButton
                        onClick={e => {
                            this.props.onDelete({
                                id: this.props.id,
                                pos: this.props.position
                            });
                        }}
                    >
                        <Icon>delete</Icon>
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(LayerCard);
