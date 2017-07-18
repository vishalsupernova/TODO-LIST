const initialState = { update: '', Items: []}

function Todo(state = initialState, action) {
    
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            let Items = state.Items.push(action.add)
            return{...state, Items: state.Items};
        case 'CHECK': 
            return{...state, checkItems: state.check}
        case 'DELETE':
            let filterItems = state.Items.splice((Items) => {return Items != (action.del)})
            return{...state, Items: filterItems}
        default:
            return state
    }
}

export default Todo