import React, { Component } from 'react';
import { connect } from 'react-redux';
import './List.css';
import md5 from 'md5'
import { getComments } from '../../actions/commentActions';
import MomentReact from 'react-moment';

function mapStateToProps(state) {
    return { comments: state.comment.comments, 
             loading: state.comment.loading 
    };
}

class List extends Component {
    constructor() {
        super();
        this.state = { id: 0 };
        this.listView = this.listView.bind(this);
        this.UserLastComment = this.UserLastComment.bind(this);
    }

    componentWillMount() {
        this.props.getComments();
    }
    UserLastComment(email,date){
        let latestCommentDate = date;
        for (let i = 0 ; i < this.props.comments.length; i++) {
        const comment = this.props.comments[i];
            if (comment.email === email) {
                if (comment.commentDate > latestCommentDate) {
                    latestCommentDate = comment.commentDate;
                }
            }
        }
        return latestCommentDate;
    }

    listView() {
        return this.props.comments.map((comment) => {
            if (comment.visible === true) {
                return (
                    <li key={comment._id}>
                        <div className="img-cont tooltip">
                            <img src={`http://www.gravatar.com/avatar/${md5(comment.email.toLowerCase())}`} alt='user' />
                            <span className="tooltiptext">Last comment: <MomentReact format="HH:mm DD/MM/YYYY">{this.UserLastComment(comment.email, comment.commentDate)}</MomentReact></span>
                        </div>
                        <div className="message-text">
                            <h2 className="email">{comment.email}</h2>
                            <p className="message">{comment.message}</p>
                        </div>
                    </li>
                )
            } else {
                return null;
            }
        });
    }
    render() {
        if (this.props.loading) {
            return (
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            );
        } else {
            return (
                <ul>
                    {this.listView()}
                </ul>
            );
        }
    }
}

export default connect(
    mapStateToProps,
    { getComments }
)(List);