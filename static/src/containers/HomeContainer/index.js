import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/model';

const mapStateToProps = (state) => {
    return {
        model : state.model
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

/* components */
import { Home } from '../../components/Home';

class HomeContainer extends React.Component {

    render() {
        return (
            <section>
                <Home model = {this.props.model} onDrop = {this.props.uploadModel} />
            </section>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);