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
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    },
    textField: {
        width: "100%"
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
    },
    {
        value: "elu",
        label: "eLu"
    },
    {
        value: "selu",
        label: "SeLu"
    },
    {
        value: "softplus",
        label: "Softplus"
    },
    {
        value: "hard_sigmoid",
        label: "Hard Sigmoid"
    },
    {
        value: "softsign",
        label: "SoftSign"
    },
    {
        value: "exponential",
        label: "Exponential"
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
        console.log(event.target.value);
        this.setState({
            config: {
                ...this.state.config,
                [name]: event.target.value
            }
        });
    };

    handleCheckboxChange = name => event => {
        this.setState({
            config: {
                ...this.state.config,
                [name]: event.target.checked
            }
        });
    };
    render() {
        const { classes, class_name } = this.props;

        const {
            config: {
                activation,
                activity_regularizer,
                dtype,
                name,
                units,
                use_bias
            }
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
                    <IconButton
                        onClick={e => {
                            console.log(this.props.position);
                            console.log(this.props.config);
                            this.props.onAdd({
                                config: this.props.config,
                                pos: this.props.position + 1
                            });
                        }}
                    >
                        <Icon>add_circle</Icon>
                    </IconButton>
                </div>

                <div className={classes.cardHeader}>
                    <TextField
                        className={classNames("drag-cancel", classes.textField)}
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
                <Divider />
                <CardContent className={classes.cardContent}>
                    <TextField
                        id="select-units"
                        label="Units"
                        value={units}
                        onChange={this.handleChange("units")}
                        type="number"
                        className={classNames("drag-cancel", classes.textField)}
                        margin="dense"
                        variant="outlined"
                        helperText="Choose output units"
                    />
                    <TextField
                        id="select-activation"
                        select
                        label="Activation"
                        className={classNames("drag-cancel", classes.textField)}
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
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={use_bias}
                                onChange={this.handleCheckboxChange("use_bias")}
                                color="primary"
                            />
                        }
                        label="Use Bias"
                    />
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
