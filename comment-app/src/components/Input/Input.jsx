import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Input.css';
import { addComment } from '../../actions/commentActions';

function mapStateToProps(state) {
    return {

    };
}

class Input extends Component {
    constructor() {
        super();
        this.state = {
            emailInput: '',
            messageInput: ''
        };
        this.valueChangeEmail = this.valueChangeEmail.bind(this);
        this.valueChangemessage = this.valueChangemessage.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    valueChangeEmail(e) {
        this.setState({
            emailInput: e.target.value
        })
    }

    valueChangemessage(e) {
        this.setState({
            messageInput: e.target.value
        })
    }

    submitForm(e) {
        console.log('submit');
        e.preventDefault();
        this.props.addComment({
            email: this.state.emailInput,
            message: this.state.messageInput,
            commentDate: Date.now()
        });
        this.setState({
            emailInput: '',
            messageInput: ''
        })
    }

    render() {
        return (
            <div className='input-comment'>
                <form action="" onSubmit={this.submitForm}>
                    <input type="email"
                        placeholder=" Email"
                        required
                        value={this.state.emailInput}
                        onChange={this.valueChangeEmail} />
                    <textarea type="text"
                        placeholder=" message"
                        required
                        value={this.state.messageInput}
                        onChange={this.valueChangemessage} />
                    <input className="submit" type="submit"
                        value="SUBMIT" />
                </form>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { addComment }
)(Input);