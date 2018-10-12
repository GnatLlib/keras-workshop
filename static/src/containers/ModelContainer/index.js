import React, { Component } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LayerCard } from "../../components/LayerCard";

const ReactGridLayout = WidthProvider(RGL);

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
    generateLayout = layers => {
        return layers.map((layer, index) => {
            return {
                i: String(index),
                x: 0,
                y: index,
                w: 1,
                h: 4,
                isResizable: false
            };
        });
    };

    renderLayerCards = layers => {
        return layers.map((layer, index) => {
            return (
                <div key={index}>
                    <LayerCard {...layer} />
                </div>
            );
        });
    };
    render() {
        const model = JSON.parse(this.props.model.model);
        console.log(model);
        // layout is an array of objects, see the demo for more complete usage
        const layout = this.generateLayout(model.config);
        console.log(layout);
        return (
            <div className="model-grid-container">
                <ReactGridLayout
                    className="layout"
                    cols={1}
                    rowHeight={30}
                    width={600}
                    layout={layout}
                >
                    {this.renderLayerCards(model.config)}
                </ReactGridLayout>
            </div>
        );
    }
}
