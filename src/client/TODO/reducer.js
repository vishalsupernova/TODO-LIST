const initialState = { update: '', Items: [], Strikes: [], filters: []}

function Todo(state = initialState, action) {
    
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            let Items = state.Items.push(action.add)
            return{...state, Items: state.Items};
        case 'STRIKE': 
            let Strikes = state.Strikes.push(action.strike)
            return{...state, Strikes: state.Strikes};
        case 'FILTER':
            console.log("NAMEEE " +action.names)
            let filters = state.Items.find((Item) => {return Item != (action.names)})
            return{...state, Items: state.filters}
        default:
            return state
    }
}

export default Todo