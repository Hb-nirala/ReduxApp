export const ADD_ITEM = "ADD_ITEM";
export const CALCULATE_MY_CART_AMOUNT = "CALCULATE_MY_CART_AMOUNT"
export const BUY_MY_CART_PRODUCTS = "BUY_MY_CART_PRODUCTS"

export const addItem = ItemData => ({
    type: ADD_ITEM,
    payload: ItemData
});

export const calculateMyCartAmount = selectedItemArray => ({
    type: CALCULATE_MY_CART_AMOUNT,
    payload: selectedItemArray
});

export const buyMyCartProduct = selectedItemArray => ({
    type: BUY_MY_CART_PRODUCTS,
    payload: selectedItemArray
});