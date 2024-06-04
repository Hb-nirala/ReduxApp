import { ADD_ITEM, CALCULATE_MY_CART_AMOUNT } from "./CartAction";

const initialState = {
    price: 0,
    numOfItem: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const { id, itemName, itemPrice } = action.payload
            return {
                ...state,
                numOfItem: [...state.numOfItem, { id, itemName, itemPrice }]
            };
        }
        case CALCULATE_MY_CART_AMOUNT: {
            const selectedItemArray = action.payload
            console.log("selectedItemArray===========",selectedItemArray);  
            return {
                ...state,
                numOfItem: [...state.numOfItem, { id, itemName, itemPrice }],
            };
        }
        default:
            return state;
    }
}

export default cartReducer;