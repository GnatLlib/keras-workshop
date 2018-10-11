import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";

const cardSource = {
    beginDrag(props) {
        return {
            ...props
        };
    }
};

@DragSource("Card", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource()
}))
export default class DraggableCard extends Component {
    render() {
        return this.props.connectDragSource(<div>{this.props.children}</div>);
    }
}
