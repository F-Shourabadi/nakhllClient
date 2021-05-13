import * as Types from './Types';

let initialize = {
    counter: 0
};

export const counterReducer = (state = initialize, action = []) => {

    switch (action.type) {
        case Types.INCREMENT:
            return {
                counter: ++state.counter
            };
        case Types.DECREMENT:
            if (state.counter !== 0)
                return {
                    counter: --state.counter
                };
        default:
            return state;
    }
}