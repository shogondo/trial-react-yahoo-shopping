const getRanking = (response) => {
    const ranking = [];
    const itemLength = response.ResultSet.totalResultsReturned;
    for (let index = 0; index < itemLength; index++) {
        const item = response.ResultSet['0'].Reslt[index + ''];
        ranking.push({
            code: item.Code,
            name: item.Name,
            url: item.Url,
            imageUrl: item.image.Medium
        });
    }
    return ranking;
};

const initialState = {
    categoryId: undefined,
    rnaking: undefined,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START_REQUEST':
            return {
                categoryId: action.payload.categoryId,
                ranking: undefined,
                error: false
            };
        case 'RECEIVE_DATA':
            return action.payload.error
                ? { ...state, error: true }
                : { ...state, ranking: getRanking(action.payload.response) };
        default:
            return state;
    }
};
