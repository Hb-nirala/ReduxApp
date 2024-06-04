export const ADD_ITEM = "ADD_ITEM";
export const CALCULATE_MY_CART_AMOUNT = "CALCULATE_MY_CART_AMOUNT"

export const addItem = ItemData => ({
    type: ADD_ITEM,
    payload: ItemData
});

export const calculateMyCartAmount = selectedItemArray => ({
    type: CALCULATE_MY_CART_AMOUNT,
    payload: selectedItemArray
});