import * as actions from '../actions/Ranking';
import * as redux from 'react-redux';
import { Ranking } from '../components/Ranking';

const mapStateToProps = (state, ownProps) => ({
    categoryId: ownProps.categoryId
});

const mapDispatchToProps = (dispatch) => ({
    onMount: (categoryId) => {
        dispatch(actions.fetchRanking(categoryId));
    },
    onUpdate: (categoryId) => {
        dispatch(actions.fetchRanking(categoryId));
    }
});

export default redux.connect(mapStateToProps, mapDispatchToProps)(Ranking);
