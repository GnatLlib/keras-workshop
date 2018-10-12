import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

/* application components */
import Header from "../../components/Header";

/* global styles for app */
import "./styles/app.scss";

const styles = {
    appFrame: {
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%"
    },
    content: {
        flexGrow: 1,
        marginTop: 64
    }
};
@withStyles(styles)
class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return (
            <CssBaseline>
                <section>
                    <div className={this.props.classes.appFrame}>
                        <Header />
                        <div
                            className={classNames(
                                "container",
                                this.props.classes.content
                            )}
                        >
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </CssBaseline>
        );
    }
}

export { App };
