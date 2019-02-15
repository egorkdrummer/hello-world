//const redux = require('redux');
import { createStore } from 'redux'

const initialState = {
	counter: 0
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state.counter = state.counter + 1
			break;
		case 'DECREMENT':
			return state.counter = state.counter - 1
			break;
	}
	return state;
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

console.log(store.getState())

export default store;
