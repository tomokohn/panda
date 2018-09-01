import React, { Component } from 'react';
import { connect } from 'react-redux';
import Store from '../../store';
import './Filter.css';

function mapStateToProps(state) {
    return {

    };
}

class Filter extends Component {
    constructor() {
        super();
        this.state = {
            filterInput: ''
        };
        this.change = this.change.bind(this);
    }
    change() {
        Store.dispatch({
            type: 'FILTER',
            filter: this.state.filterInput.value
        });
    }
    render() {
        return (
            <div className='filter'>
                <input type="text" placeholder="Filter by Email" ref={node => {
                    this.state.filterInput =  node}
                } onChange={this.change}
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Filter);