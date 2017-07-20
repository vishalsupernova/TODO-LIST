const initialState = { update: '', Items: [], filters: [], id: 0 }

function Todo(state = initialState, action) {
    // console.log("ITEMSSS " + state.Items)
    let Items = []
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            console.log("add", action)
            Items = state.Items
            Items.push({ text: action.add, status: false, id: (state.id)++ })
            console.log(Items)
            return { ...state, Items: Items, update: ''}
        case "CHANGESTATUS":
            Items = state.Items
            Items.map((item) => {
                if (item.text == action.changeStatus) {
                    item.status = !item.status
                }
            }) 
            return { ...state, Items: Items }
        case "COMPLETE":
            Items = state.Items.filter((Item) => {return (Item.status === false)})
            return { ...state, Items: Items }
        // case "STRIKE": 
        //     Items = state.Items.filter((Item) => { return(Item.status === true)})
        //     this.state.Items.splice()
        //     return{...state, Items: Items}

        case "DELETE":
            Items = state.Items.filter((Item) => {return (Item.id) != (action.delete)})
            return{...state, Items: Items}

        default:
            return state
    }
}

export default Todo