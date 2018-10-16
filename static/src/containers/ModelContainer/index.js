import React, { Component } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LayerCard from "../../components/LayerCard";
import LineTo from "react-lineto";

const ReactGridLayout = RGL;

const mapStateToProps = state => {
    return {
        model: state.model
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

@connect(
    mapStateToProps,
    mapDispatchToProps
)
export default class ModelContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        if (props.model) {
            const model = JSON.parse(this.props.model.model);
            this.cardRefs = model.config.map(layer => {
                return React.createRef();
            });
        }
    }

    componentDidMount() {
        console.log(this.cardRefs);
    }
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
        // layout is an array of objects, see the demo for more complete usage
        const layout = this.generateLayout(model.config);
        return (
            <div className="model-grid-container">
                <ReactGridLayout
                    className="layout"
                    cols={layout.length}
                    rowHeight={30}
                    width={layout.length * 280}
                    layout={layout}
                    compactType="horizontal"
                    maxRows={1}
                    margin={[20, 20]}
                >
                    {this.renderLayerCards(model.config)}
                </ReactGridLayout>
            </div>
        );
    }
}
