import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

/* application components */
import Header from "../../components/Header";

/* global styles for app */
import "./styles/app.scss";

class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
        return (
            <CssBaseline>
                <section>
                    <div className="app-frame">
                        <Header />
                        <div className="container content">
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </CssBaseline>
        );
    }
}

export { App };
