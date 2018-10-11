import React, { Component } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from "material-ui/Card/Card";
import CardContent from "material-ui/Card/CardText";

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
    render() {
        const model = JSON.parse(this.props.model.model);
        console.log(model);
        // layout is an array of objects, see the demo for more complete usage
        const layout = [
            { i: "a", x: 0, y: 0, w: 1, h: 2, isResizable: false },
            { i: "b", x: 1, y: 0, w: 1, h: 2, isResizable: false },
            { i: "c", x: 4, y: 0, w: 1, h: 2, isResizable: false }
        ];
        return (
            <div className="model-grid-container">
                <ReactGridLayout
                    className="layout"
                    cols={1}
                    rowHeight={30}
                    width={600}
                    layout={layout}
                >
                    <div key="a">
                        <Card>
                            <CardContent>
                                {model.config[0].config.name}
                            </CardContent>
                        </Card>
                    </div>
                    <div key="b">
                        <Card>
                            <CardContent>Layer 2</CardContent>
                        </Card>
                    </div>
                    <div key="c">
                        <Card>
                            <CardContent>Layer 3</CardContent>
                        </Card>
                    </div>
                </ReactGridLayout>
            </div>
        );
    }
}
