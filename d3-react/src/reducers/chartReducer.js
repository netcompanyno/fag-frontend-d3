import {DATA_RECEIVED, DATA_SEND} from "../constants/chartActionTypes";

const defaultState = {
    message: "default"
};

export default function dataReducer(state = defaultState, action) {
    switch (action.type) {
        case DATA_RECEIVED:{
            return {...state, message: action.payload};
        }

        case DATA_SEND: {
            return {...state, message: action.payload};
        }

        default: {
            return state;
        }
    }

}
