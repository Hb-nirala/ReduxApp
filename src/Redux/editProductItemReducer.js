import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: {
        editItem: null,
        editItemIndex: null,
    }
}

export const editProductItemReducer = createSlice({
    name: 'EditProductItem',
    initialState,
    reducers: {
        setEditItem: (state, action) => {
            console.log("action.payload.item==setEditItem", action.payload.item, action.payload.indexOfEditItem);
            state.value.editItem = action.payload.item
            state.value.editItemIndex = action.payload.indexOfEditItem
        },
    }
})
export const { setEditItem } = editProductItemReducer.actions
export default editProductItemReducer.reducer