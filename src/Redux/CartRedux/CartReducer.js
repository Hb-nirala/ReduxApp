import { ADD_ITEM } from "./CartAction";

const initialState = {
    price: '',
    numOfItem: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            console.log("ADD_ITEM==", action.payload);
            const { id, itemName, itemPrice } = action.payload
            return {
                ...state,
                numOfItem: [...state.numOfItem, { id, itemName, itemPrice }]
            };
        }
        default:
            return state;
    }
}

export default cartReducer;