export const update = (value) => {
    return {
        type: 'UPDATE',
        update: value, 
    }
}

export const add = (update) => {
    return {
        type: "ADD",
        add: update
    }
}

export const changeStatus = (value) => {
    return{
        type: "CHANGESTATUS",
        changeStatus: value,
    }
}

export const complete = (status) => {
    return{
        type: "COMPLETE",
        status: status
    }
}

export const strike = (status) => {
    return{
        type: "STRIKE",
        strike: status    
    }
}

export const del = (value) => {
    return{
        type: "DELETE",
        delete: value
    }
}

export const double = (id) => {
    return{
        type: "DOUBLE",
        double: id
    }
}

export const edit = (id, value) => {
    return{
        type: "EDIT",
        id: id,
        value: value
    }
}


