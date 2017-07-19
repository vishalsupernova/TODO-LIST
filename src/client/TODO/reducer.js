const initialState = { update: '', Items:[], Strikes: [], filters: []}

function Todo(state = initialState, action) {
    console.log("ITEMSSS " +state.Items)
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            return{...state, Items:state.Items.concat(state.update)};
        case 'COMPLETE': 
            console.log("ACTIONS " +action.complete.isComplete)
            let complete= (!(action.isComplete))
            return{...state, complete: state.complete}
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