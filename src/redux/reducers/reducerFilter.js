const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'
const CLEAR_FILTER = 'CLEAR_FILTER'

let initialState = []

export const reducerFilter = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FILTER: {
			if (state.includes(action.filter)) {
				return state
			}
			return [...state, action.filter]
		}
		case REMOVE_FILTER: {
			return state.filter(item => item !== action.filter)
		}
		case CLEAR_FILTER: {
			return []
		}
		default: {
			return state
		}
	}
}

export const addFilterAC = (filter) => ({ type: ADD_FILTER, filter })
export const removeFilterAC = (filter) => ({ type: REMOVE_FILTER, filter })
export const clearFilterAC = (filter) => ({ type: CLEAR_FILTER, filter })