import { combineReducers } from 'redux';
import BookReducer from './BookReducer';
import ActiveBookReducer from './ActiveBookReducer';

export default combineReducers({
    books: BookReducer,
    activeBook: ActiveBookReducer
});
