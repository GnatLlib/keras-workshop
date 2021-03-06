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
import * as actionCreators from "../../actions/model";
import { DEFAULT_LAYER_CONFIG } from "../../constants/index";

const ReactGridLayout = RGL;

const mapStateToProps = state => {
    return {
        model: state.model
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
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
            const layers = props.model.layers;
            this.cardRefs = layers.map(layer => {
                return React.createRef();
            });
        }
    }

    componentDidMount() {}
    generateLayout = layers => {
        return layers.map((layer, index) => {
            return {
                i: String(layer.id),
                x: layer.position,
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
                    key={layer.id}
                    className={"layer-card-" + String(layer.id)}
                    ref={this.cardRefs[index]}
                >
                    <LayerCard
                        {...layer}
                        onDelete={this.props.deleteModelLayer}
                        onAdd={this.props.addModelLayer}
                    />
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
        const layers = this.props.model.layers;
        const { classes } = this.props;
        // layout is an array of objects, see the demo for more complete usage
        const layout = this.generateLayout(layers);
        return (
            <div className="model-grid-container">
                <div
                    className={classNames({
                        [classes.addIcon]: true
                    })}
                >
                    <IconButton
                        onClick={e => {
                            this.props.addModelLayer({
                                pos: 0,
                                config: DEFAULT_LAYER_CONFIG
                            });
                        }}
                    >
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
                    {this.renderLayerCards(layers)}
                </ReactGridLayout>
            </div>
        );
    }
}

export default withStyles(styles)(ModelContainer);
