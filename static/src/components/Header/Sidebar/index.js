import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => {};
const Sidebar = props => {
    return (
        <List component="nav">
            <ListItem button>
                <ListItemText primary="Model Builder" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Training" />
            </ListItem>
        </List>
    );
};

export default withStyles(styles)(Sidebar);
