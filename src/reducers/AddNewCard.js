import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const AddNewCardSlice = createSlice({
    name: "AddNewCard",
    initialState,
    reducers: {
        AddNewCard: (state, action) => {
            console.log(action.payload); 
            return [...state, action.payload];
        }
    }
});

export const { AddNewCard } = AddNewCardSlice.actions;

export default AddNewCardSlice.reducer;