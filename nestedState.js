"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var redux_logger_1 = require("redux-logger");
var immer_1 = require("immer");
var logger = (0, redux_logger_1.createLogger)();
var initialState = {
    name: "Abin",
    address: {
        street: "Patel Street",
        city: "Chennai",
        state: "Tamil Nadu",
    },
};
var STREET_UPDATED = "STREET_UPDATED";
var updateStreet = function (street) {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case STREET_UPDATED:
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street : action.payload
            //     }
            // }
            return (0, immer_1.produce)(state, function (draft) {
                draft.address.street = action.payload;
            });
        default: return state;
    }
};
var store = (0, toolkit_1.createStore)(reducer, (0, toolkit_1.applyMiddleware)(logger));
var unsubscribe = store.subscribe(function () {
    var state = store.getState();
});
store.dispatch(updateStreet('ABC street'));
unsubscribe();
