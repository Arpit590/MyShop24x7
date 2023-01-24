import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes";

export const addToCart =(product)=>{
    return{
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart =(product)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export const adjustQty =(productId, value)=>{
    return{
        type: REMOVE_FROM_CART,
        payload: {
            id :productId,
            qty: value
        }
    }
}