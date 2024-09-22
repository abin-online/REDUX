const CAKE_ORDERED : String = 'CAKE_ORDERED'

function orderCake(): Object{
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}




export{}