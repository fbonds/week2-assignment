import React from 'react';
import PropTypes from 'prop-types';

class MissedIt extends React.Component {
    static propTypes = {
        missedObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            minsToRead: PropTypes.number.isRequired,
            hasAudio: PropTypes.bool.isRequired,
            preview: PropTypes.bool.isRequired,
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                authorimage: PropTypes.string.isRequired,
                member: PropTypes.bool.isRequired
            })

        })
    }


    render() {
        return (
                <div class="card">
                    <img src={this.props.image} />
                    <div class="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect Engineer</p>
                    </div>
                </div>

            );
    }

}

export default MissedIt;