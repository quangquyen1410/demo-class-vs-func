import userInterface from '../interface/userInterface'
const listUser: userInterface[] = [];

const userReducer = (state = listUser, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return [...state, action.payload];
        }
        case 'DELETE_USER': {
            // state = state.filter(x => x.id !== action.payload);
            let indexUser = state.findIndex(x => x.id === action.payload);
            state.splice(indexUser, 1);
            let arrState = [...state]
            return arrState;
        }
        case 'UPDATE_USER': {
            let indexUser = state.findIndex(x => x.id === action.payload.id);
            state[indexUser] = action.payload
            return state;
        }
        default: return state;
    }
}
export default userReducer;