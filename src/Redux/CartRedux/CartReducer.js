import { ADD_ITEM, BUY_MY_CART_PRODUCTS, CALCULATE_MY_CART_AMOUNT, REMOVE_ITEM } from "./CartAction";

const initialState = {
    price: 0,
    numOfItem: [],
    isLoading: false
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
            // console.log("ADD_ITEM");
            const { id, itemName, itemPrice } = action.payload
            // console.log("action.payload======", action.payload);
            //if item already exists in cart then increase the quantity
            const itemExists = state.numOfItem.find(item => item.id === id);
            if (itemExists) {
                return {
                    ...state,
                    numOfItem: state.numOfItem.map(item =>
                        item.id === id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            } 
            //if item does not exist in cart then add it to cart
            else {
                return {
                    ...state,
                    numOfItem: [...state.numOfItem, { id, itemName, itemPrice, quantity: 1 }]
                };
            }
        }
        case REMOVE_ITEM: {
            const { id, itemName, itemPrice } = action.payload
            //Remove the item from cart
            return {
                ...state,
                numOfItem: state.numOfItem.map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ).filter(item => item.quantity > 0)
            }
        }
        case CALCULATE_MY_CART_AMOUNT: {
            const selectedItemArray = action.payload
            // console.log("CALCULATE_MY_CART_AMOUNT");
            const calculateTotalPrice = (selectedItemArray) => {
                let totalPrice = 0
                selectedItemArray.forEach(element => {
                    totalPrice = totalPrice + (element.quantity * element.itemPrice)
                });
                return totalPrice
            }
            return {
                ...state,
                price: calculateTotalPrice(selectedItemArray),
                isLoading : true
            };
        }
        case BUY_MY_CART_PRODUCTS: {
            const selectedItemArray = action.payload
            // console.log("BUY_MY_CART_PRODUCTS",selectedItemArray);
            return {
                ...state,
                numOfItem : [],
                isLoading : true
            };
        }
        default:
            return state;
    }
}

export default cartReducer;