import React, { Component } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LayerCard from "../../components/LayerCard";
import LineTo from "react-lineto";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const ReactGridLayout = RGL;

const mapStateToProps = state => {
    return {
        model: state.model
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

const styles = theme => ({
    addIcon: {
        zIndex: 2,
        position: "relative",
        transition: "0.2s"
    }
});
@connect(
    mapStateToProps,
    mapDispatchToProps
)
class ModelContainer extends Component {
    constructor(props) {
        super(props);

        if (props.model) {
            const model = JSON.parse(this.props.model.model);
            this.cardRefs = model.config.map(layer => {
                return React.createRef();
            });
        }
    }

    componentDidMount() {}
    generateLayout = layers => {
        return layers.map((layer, index) => {
            return {
                i: String(index),
                x: index * 2,
                y: 0,
                w: 1,
                h: 8,
                isResizable: false
            };
        });
    };

    renderLayerCards = layers => {
        return layers.map((layer, index) => {
            return (
                <div
                    key={index}
                    className={"layer-card-" + String(index)}
                    ref={this.cardRefs[index]}
                >
                    <LayerCard {...layer} />
                </div>
            );
        });
    };

    renderCardConnectors = layers => {
        return layers.map((layer, index) => {
            return (
                <LineTo
                    key={index}
                    from={"layer-card-" + String(index)}
                    to={"layer-card-" + String(index + 1)}
                    fromAnchor="right"
                    toAnchor="left"
                    borderWidth={2}
                    borderStyle="dashed"
                    borderColor="darkgray"
                    zIndex={-1}
                    delay={true}
                />
            );
        });
    };
    render() {
        const model = JSON.parse(this.props.model.model);
        const { classes } = this.props;
        // layout is an array of objects, see the demo for more complete usage
        const layout = this.generateLayout(model.config);
        return (
            <div className="model-grid-container">
                <div
                    className={classNames({
                        [classes.addIcon]: true
                    })}
                >
                    <IconButton>
                        <Icon>add_circle</Icon>
                    </IconButton>
                </div>
                <ReactGridLayout
                    className="layout"
                    cols={layout.length}
                    rowHeight={30}
                    width={layout.length * 280}
                    layout={layout}
                    compactType="horizontal"
                    maxRows={1}
                    margin={[20, 20]}
                    draggableCancel=".drag-cancel"
                >
                    {this.renderLayerCards(model.config)}
                </ReactGridLayout>
            </div>
        );
    }
}

export default withStyles(styles)(ModelContainer);
