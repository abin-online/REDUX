import { createStore } from "@reduxjs/toolkit";

const CAKE_ORDERED : string = 'CAKE_ORDERED'
const CAKE_RESTOCK : string = 'CAKE_RESTOCKED'

interface OrderCakeAction {
    type: string;
    payload: number
}

function orderCake(): OrderCakeAction {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
} //Action creator

function restockCake(qty: number = 1) : OrderCakeAction {
    return {
        type: CAKE_RESTOCK,
        payload: qty
    }
} //Action creator

interface CakeState {
    numOfCakes: number;
    anotherProperty: number
}

const initialState : CakeState = {
    numOfCakes: 10,
    anotherProperty: 0
}

const reducer = (state: CakeState = initialState , action: OrderCakeAction): CakeState => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
        };
        case CAKE_RESTOCK: 
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer);
const unsubscribe = store.subscribe(():void =>{
    const state: CakeState = store.getState();
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(4))

unsubscribe()


export{}