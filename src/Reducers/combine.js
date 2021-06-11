import { combineReducers } from 'redux';
import Auth from './Authnetication';

import questions from './questions';
import users from './user';
export default combineReducers({
    Auth,
    questions,
    users
})
