export const update = (value) => {
    return {
        type: 'UPDATE',
        update: value, //eat
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

export const strike = (value) => {
    return{
        type: "STRIKE",
        strike: value 
        
    }
}


