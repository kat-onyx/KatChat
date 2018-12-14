import { RECEIVE_SERVER_ERRORS } from "../actions/server_actions";

const serverErrorsReducer = (state = [], action) => {
    switch(action.type) {
        case RECEIVE_SERVER_ERRORS:
            return action.errors;
        default: 
            return state;
    }
}

export default serverErrorsReducer;