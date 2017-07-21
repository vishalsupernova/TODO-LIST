const initialState = { update: '', Items: [], id: 0 }

function Todo(state = initialState, action) {
    let Items = []
    switch (action.type) {
        case 'UPDATE':
            return { ...state, update: action.update };
        case 'ADD':
            Items = state.Items
            Items.push({ text: action.add, status: false, id: (state.id)++ })
            console.log(Items)
            return { ...state, Items: Items, update: '' }

        case "CHANGESTATUS":
            Items = state.Items
            Items.map((item) => {
                if (item.text == action.changeStatus) {
                    item.status = !item.status
                }
            })
            // console.log(Items)
            return { ...state, Items: Items }

        case "COMPLETE":
            Items = state.Items.filter((Item) => { return (Item.status === false) })
            return { ...state, Items: Items }

        case "DELETE":
            Items = state.Items.filter((Item) => { return (Item.id) != (action.delete) })
            return { ...state, Items: Items }

        case "DOUBLE":
            console.log(Items)
            return { ...state, Items: state.Items.map((Item) => {
                if (Item.id == action.double) {
                    // Item.id=action.id
                    return {...Item,status :true,}
                }
                return Item
            }) }

        case "EDIT":
            console.log(action.id, action.value)
            console.log(state.Items)
            return { ...state, Items: state.Items.map((Item) => {
                if (Item.id == action.id) {
                    Item.text=action.value
                    return {...Item,status :false, text: Item.text}
                }
                return Item
            }) }

            // Items = state.Items
            // Items.filter((Item) => {
            //     if (Item.id == action.id) {
            //         Item.text = action.value
            //         Item.status = false
            //     }
            // })
            // return{...state, Items: Items}

            // Items: state.Items.filter((Item) => { if(state.id == action.id)
            //     {
            //         state.text=action.value
            //     }
            // })          
            // console.log(Items)
            // return{...state, Items: Items}

        default:
            return state
    }
}
const setEditable = (Item)=>{

}

export default Todo