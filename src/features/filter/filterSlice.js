import { createSlice } from "@reduxjs/toolkit"


const filterSlice = createSlice({
	name: 'filter',
	initialState: [],
	reducers: {
		addFilterAC: (state, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload)
			}
		},
		removeFilterAC: (state, action) => {
			return state.filter(item => item !== action.payload)
		},
		clearFilterAC: () => [],
	}
})

export const { addFilterAC, removeFilterAC, clearFilterAC } = filterSlice.actions
export const filterReducer = filterSlice.reducer