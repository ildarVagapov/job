export const ADD_POSITIONS = 'ADD_POSITIONS';

export const reducerPosition = (state = [], action) => {
	switch (action.type) {
		case ADD_POSITIONS: {
			return action.position
		}

		default: {
			return state
		}
	}
}

export const addPositionAC = (position) => ({ type: ADD_POSITIONS, position })