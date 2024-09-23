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
var redux_logger_1 = require("redux-logger");
var logger = (0, redux_logger_1.createLogger)();
var CAKE_ORDERED = 'CAKE_ORDERED';
var CAKE_RESTOCK = 'CAKE_RESTOCKED';
var ICECREAM_ORDERED = 'ICECREAM_ORDERED';
var ICECREAM_RESTOCK = 'ICECREAM_RESTOCK';
//Action creator for Cake
function orderCake(qty) {
    if (qty === void 0) { qty = 1; }
    return {
        type: CAKE_ORDERED,
        payload: qty
    };
}
function restockCake(qty) {
    if (qty === void 0) { qty = 1; }
    return {
        type: CAKE_RESTOCK,
        payload: qty
    };
}
//Action creator for Ice creams
function orderIceCream(qty) {
    if (qty === void 0) { qty = 1; }
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    };
}
function restockIceCream(qty) {
    if (qty === void 0) { qty = 1; }
    return {
        type: ICECREAM_RESTOCK,
        payload: qty
    };
}
var initialCakeState = {
    numOfCakes: 10
};
var cakeReducer = function (state, action) {
    if (state === void 0) { state = initialCakeState; }
    switch (action.type) {
        case CAKE_ORDERED:
            return __assign(__assign({}, state), { numOfCakes: state.numOfCakes - action.payload });
        case CAKE_RESTOCK:
            return __assign(__assign({}, state), { numOfCakes: state.numOfCakes + action.payload });
        default:
            return state;
    }
};
var initialIceCreamState = {
    numOfIceCreams: 10
};
var iceCreamReducer = function (state, action) {
    if (state === void 0) { state = initialIceCreamState; }
    switch (action.type) {
        case ICECREAM_ORDERED:
            return __assign(__assign({}, state), { numOfIceCreams: state.numOfIceCreams - action.payload });
        case ICECREAM_RESTOCK:
            return __assign(__assign({}, state), { numOfIceCreams: state.numOfIceCreams + action.payload });
        default:
            return state;
    }
};
// used to combine the reducer
var rootReducer = (0, toolkit_1.combineReducers)({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
var store = (0, toolkit_1.createStore)(rootReducer, (0, toolkit_1.applyMiddleware)(logger));
var unsubscribe = store.subscribe(function () {
    var state = store.getState();
});
var actions = (0, toolkit_1.bindActionCreators)({ orderCake: orderCake, restockCake: restockCake, orderIceCream: orderIceCream, restockIceCream: restockIceCream }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.restockCake(45);
actions.restockIceCream(40);
actions.orderIceCream(10);
unsubscribe();
