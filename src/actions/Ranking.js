import * as config from './config';
import fetchJsonp from 'fetch-jsonp';
import { replace } from 'connected-react-router';
import qs from 'qs';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';

const startRequest = (category) => ({
    type: 'START_REQUEST',
    payload: { category }
});

const receiveData = (category, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { category, error, response }
});

const finishRequest = (category) => ({
    type: 'FINISH_REQUEST',
    payload: { category }
});

export const fetchRanking = (categoryId) => {
    return async (dispatch, getState) => {
        const categories = getState().Shopping.categories;
        const category = categories.find((o) => categoryId === o.id);
        if (typeof category === 'undefined') {
            dispatch(replace('/'));
            return;
        }

        dispatch(startRequest(categoryId));

        const queryString = qs.stringify({
            appid: config.YAHOO_APP_ID,
            category_id: categoryId
        });

        try {
            const response = await fetchJsonp(`${API_URL}?${queryString}`);
            const data = await response.json();
            dispatch(receiveData(category, null, data));
        }
        catch (error) {
            dispatch(receiveData(category, error));
        }
        dispatch(finishRequest(category));
    };
}