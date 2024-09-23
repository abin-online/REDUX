import { bindActionCreators, combineReducers, createStore } from "@reduxjs/toolkit";

const CAKE_ORDERED : string = 'CAKE_ORDERED'
const CAKE_RESTOCK : string = 'CAKE_RESTOCKED'

const ICECREAM_ORDERED : string = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCK : string = 'ICECREAM_RESTOCK'

interface Action {
    type: string;
    payload: number
}

//Action creator for Cake

function orderCake(qty: number = 1): Action {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
} 

function restockCake(qty: number = 1) : Action {
    return {
        type: CAKE_RESTOCK,
        payload: qty
    }
} 

//Action creator for Ice creams

function orderIceCream(qty: number = 1): Action {
    return {
        type : ICECREAM_ORDERED,
        payload : qty
    }
}

function restockIceCream(qty: number = 1): Action {
    return {
        type : ICECREAM_RESTOCK,
        payload: qty
    }
}


const initialCakeState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakeState , action: Action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
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


const initialIceCreamState = {
    numOfIceCreams: 10
}

const iceCreamReducer = (state = initialIceCreamState , action: Action) => {
    switch(action.type) {
        case ICECREAM_ORDERED :
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams - action.payload
            }
        
        case ICECREAM_RESTOCK : 
            return {
                ...state,
                numOfIceCreams : state.numOfIceCreams + action.payload
            }
        default :
            return state
    }
}

// used to combine the reducer

const rootReducer = combineReducers({
    cake: cakeReducer ,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)

const unsubscribe = store.subscribe(():void =>{
    const state = store.getState();
})


const actions = bindActionCreators({orderCake , restockCake , orderIceCream , restockIceCream} , store.dispatch )
actions.orderCake()
actions.orderCake()
actions.restockCake(45)
actions.restockIceCream(40)
actions.orderIceCream(10)
unsubscribe()


export{}