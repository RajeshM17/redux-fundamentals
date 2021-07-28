import {combineReducers} from 'redux';
import usersReducer from './users'
import projectsReducer from './projects';
import bugsReducer from './bugs';

export default combineReducers({
    bugs:bugsReducer,
    projects:projectsReducer,
    users:usersReducer
})