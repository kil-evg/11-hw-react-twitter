import { legacy_createStore } from 'redux';
import { twitterReducer } from '../reducer/twitterReducer';

const store = legacy_createStore(twitterReducer);

export default store;