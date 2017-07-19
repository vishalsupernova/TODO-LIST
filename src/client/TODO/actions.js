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


export const strike = (value) => {
    return {
        type: "STRIKE",
        strike: value
    }
}

export const filter = (strike) => {
    return {
        type: "FILTER",
        names: strike
    }
}

export const complete = (value, boolean) => {
    return {
        type: "COMPLETE",
        complete: {
            name: value,
            isComplete: false
        }
    }
}