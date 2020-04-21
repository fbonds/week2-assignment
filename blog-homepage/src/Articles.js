import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BsBookmark } from "react-icons/bs";

class Articles extends React.Component {
    static propTypes = {
        articleObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            minutesToRead: PropTypes.number.isRequired,
            hasAudio: PropTypes.bool.isRequired,
            preview: PropTypes.bool.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                member: PropTypes.bool.isRequired
            })

        })
    }

    getMaDate(date) {
        const madate = moment(date).format('MMMM DD');
        return madate;
    }

    render() {
        return (
                <div className="card">
                    <div className="container">
                        <img className="articleImage" alt="article pic" src={this.props.image} />
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <img className="authorImage" alt="author pic" src={this.props.author.image} />
                        <small>{this.props.author.name}</small><br></br>
                        <small>{this.getMaDate(this.props.date)} - {this.props.minutesToRead} mins to read</small>
                        <small><BsBookmark /></small>
    
                    </div>
                </div>

            );
    }

}

export default Articles;
