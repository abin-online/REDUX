import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import { produce } from "immer";

const logger = createLogger()


interface initialStateInterface {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
}

const initialState: initialStateInterface = {
  name: "Abin",
  address: {
    street: "Patel Street",
    city: "Chennai",
    state: "Tamil Nadu",
  },
};

interface Action {
    type : string;
    payload : string
}

const STREET_UPDATED: string = "STREET_UPDATED";

const updateStreet = (street : string) : Action => {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
};

const reducer = (state = initialState , action : Action) : initialStateInterface => {
    switch(action.type) {
        case STREET_UPDATED : 
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street : action.payload
            //     }
            // }
        return produce(state , (draft)=> {
            draft.address.street = action.payload  
        })
        default: return state
    }
}

const store = createStore(reducer , applyMiddleware(logger) );

const unsubscribe = store.subscribe(()=> {
    const state = store.getState()
})

store.dispatch(updateStreet('ABC street'))

unsubscribe()

export {};
