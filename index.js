"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var CAKE_ORDERED = 'CAKE_ORDERED';
var CAKE_RESTOCK = 'CAKE_RESTOCKED';
function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    };
}
function restockCake(qty) {
    if (qty === void 0) { qty = 1; }
    return {
        type: CAKE_RESTOCK,
        payload: qty
    };
}
var initialState = {
    numOfCakes: 10,
    anotherProperty: 0
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case CAKE_ORDERED:
            return __assign(__assign({}, state), { numOfCakes: state.numOfCakes - 1 });
        case CAKE_RESTOCK:
            return __assign(__assign({}, state), { numOfCakes: state.numOfCakes + action.payload });
        default:
            return state;
    }
};
var store = (0, toolkit_1.createStore)(reducer);
console.log('Initial State ', store.getState())
var unsubscribe = store.subscribe(function () {
    var state = store.getState();
    console.log('Updated State ', state)
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch({
    type: CAKE_RESTOCK,
    payload: 10
})
store.dispatch(restockCake(4));
unsubscribe();
