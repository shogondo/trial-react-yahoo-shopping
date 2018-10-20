import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Ranking extends Component {
    static defaultProps = {
        categoryId: '1'
    }

    static propTypes = {
        categoryId: PropTypes.string
    }

    componentWillMount() {
        this.props.onMount(this.props.categoryId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.categoryId !== nextProps.categoryId) {
            this.props.onUpdate(nextProps.categoryId);
        }
    }

    render() {
        return (
            <div>
                <h2>Ranking Component</h2>
                <p>Category ID: {this.props.categoryId}</p>
            </div>
        );
    }
}

// Ranking.propTypes = {
// };

// Ranking.defaultProps = {
//     categoryId: '1'
// };
