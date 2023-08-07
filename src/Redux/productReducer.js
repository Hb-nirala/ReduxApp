import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        productDataArray: [],
    }
}

export const productReducer = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        addProductData: (state, action) => {
            if (state.value.productDataArray.length > 0) {
                state.value.productDataArray = [...state.value.productDataArray, action.payload];
            }
            else {
                state.value.productDataArray.push(action.payload);
            }
        },
        onEditData: (state, action) => {
            const index = action.payload.editProductIndex
            const editedItem = action.payload.productData
            let updatedProductDataArray = [...state.value.productDataArray];
            updatedProductDataArray.splice(index, 1, editedItem);
            state.value.productDataArray = updatedProductDataArray

        },
        // setEditItem: (state, action) => {
        //     // const { item, index } = action.payload
        //     console.log("action.payload.item==setEditItem", action.payload.item,action.payload.indexOfEditItem);
        //     state.value.editItem = action.payload.item
        //     state.value.editItemIndex = action.payload.indexOfEditItem
        // },
        onDeleteData: (state, action) => {
            const deleteDataIndex = action.payload
            let deletedItemProductDataArray = [...state.value.productDataArray];
            deletedItemProductDataArray.splice(deleteDataIndex, 1);
            state.value.productDataArray = deletedItemProductDataArray
        }
    }
})

export const { addProductData, setProductData, onEditData, onDeleteData } = productReducer.actions
export default productReducer.reducer