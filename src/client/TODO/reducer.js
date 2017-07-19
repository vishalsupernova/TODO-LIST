const initialState = { update: '', Items: [], filters: [], }

function Todo(state = initialState, action) {
    console.log("ITEMSSS " + state.Items)
    let Items = []
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            console.log("add", action)
            Items = state.Items
            Items.push({ text: action.add, status: false, strike: false })
            console.log(Items)
            return { ...state, Items: Items, update: '' }
        case "CHANGESTATUS":
            Items = state.Items
            Items.map((i) => {
                if (i.text == action.changeStatus) {
                    i.status = !i.status
                }
            })
            return { ...state, Items: Items }
        case "COMPLETE":
            Items = state.Items.filter((Item) => {
                return (Item.status === false)
            })
            return { ...state, Items: Items }
        case "STRIKE": 
            Items = state.Items
            Items.map((i) => {
                if (i.text == action.strike) {
                    i.strike = !i.strike
                }
            })
            return { ...state, Items: Items }

        default:
            return state
    }
}

export default Todo