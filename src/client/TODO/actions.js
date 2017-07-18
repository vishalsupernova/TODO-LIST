export const update = (value) => {
    return{
        type: 'UPDATE',
        update: value,
    }
}

export const add = (update, id) => {
    return{
        type: "ADD",
        add: update,
        id: 0
    }
}

export const check = (value) => {
    console.log("Checked " +value)
    return{
        type: "CHECK",
        check: value
    }
}

export const del = (value) => {
    return{
        type: "DELETE",
        del: value
    }
}