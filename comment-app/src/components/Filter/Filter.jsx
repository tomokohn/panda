import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Filter.css';
import { filterComments } from '../../actions/commentActions';

function mapStateToProps(state) {
    return {

    };
}

class Filter extends Component {
    constructor() {
        super();
        this.state = { value: '' };
        this.change = this.change.bind(this);
    }
    change(event) {
        this.setState({ value: event.target.value });
        this.props.filterComments(event.target.value)
    }
    render() {
        return (
            <div className='filter'>
                <input type="text" placeholder="Filter by Email" 
                 value={this.state.value}
                 onChange={this.change}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { filterComments }
)(Filter);