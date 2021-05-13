import { combineReducers } from 'redux';
import { counterReducer } from './counter'
import { AddToDoReducer } from './todoList';
import { reducerModal } from './modal';

export default combineReducers({
    counterReducer,
    AddToDoReducer,
    reducerModal
})