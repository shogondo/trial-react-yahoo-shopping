import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Ranking extends Component {
    static defaultProps = {
        categoryId: '1'
    }

    static propTypes = {
        categoryId: PropTypes.string.isRequired,
        onMount: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        category: PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        ranking: PropTypes.arrayOf(
            PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                imageUrl: PropTypes.string.isRequired
            })
        ),
        error: PropTypes.bool.isRequired
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
        const { category, ranking, error } = this.props;

        return (
            <div>
                <h2>{
                    typeof category !== 'undefined' ? ` Ranking of ${category.name}` : ''
                }</h2>
                {(() => {
                    if (error) {
                        return <p>Error occurred.</p>
                    }
                    else if (!ranking) {
                        return <p>Loading...</p>
                    }
                    else {
                        return (
                            <ol>
                                {ranking.map((item) => (
                                    <li key={`ranking-item-${item.code}`}>
                                        <img alt={item.name} src={item.imageUrl}/>
                                        <a href={item.url} tareget="_blank">{item.name}</a>
                                    </li>
                                ))}
                            </ol>
                        )
                    }
                })()}
            </div>
        );
    }
}

// Ranking.propTypes = {
// };

// Ranking.defaultProps = {
//     categoryId: '1'
// };
