import * as Types from './Types';

let initialize = {
    todoList: []
};

export const AddToDoReducer = (state = initialize, action = {}) => {

    switch (action.type) {
        case Types.ADD_TODO_LIST:
            return {
                todoList: [...state.todoList, action.value]
            };
        default:
            return state;
    }
}