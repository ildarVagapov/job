import { createSlice } from "@reduxjs/toolkit"


const positionSlice = createSlice({
	name: 'position',
	initialState: [],
	reducers: {
		addPositionAC: (_, action) => action.payload
		// addPositionAC: (state, action) => {
		// 	state.push(action.payload)
		// }
	}
})

export const { addPositionAC } = positionSlice.actions
export const positionFilter = positionSlice.reducer