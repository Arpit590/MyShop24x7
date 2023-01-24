import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from './actionTypes';

const initialState={
    cart:[],
}

export const cartReducer=(state=initialState, action)=>{
    switch(action.type){

        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item)=>{
                    if(item?.id!==action.payload.id){
                        return item
                    }
                })

            }
        case ADJUST_QTY:
            return state
        default:
            return state
    }
}
