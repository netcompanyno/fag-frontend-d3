import {DATA_RECEIVED, DATA_SEND} from "../constants/chartActionTypes";

export const receiveData = (message) => {
    console.log("data received");
    return {type: DATA_RECEIVED, payload: message};
};

export const sendData = (message) => {
    console.log("data requested");
    return {type: DATA_SEND, payload: message};
};


