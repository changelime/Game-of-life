export const SET_SIZE = {
    type: "SET_SIZE",
    payload: {
        size: {
            col: 0,
            row: 0
        }
    }
};
export const SET_CELLS = {
    type: "SET_CELLS",
    payload: {
        cells: []
    }
};

export function getAction(action, payload){
    let args = [{}, action];
    args = payload ? [...args, {
        payload: payload
    }] : args;
    return Object.assign(...args);
}
export function setSize(size){
    return getAction(SET_SIZE, {
        size: size
    });
}

export function setCells(cells){
    return getAction(SET_CELLS, {
        cells: cells
    });
}

export default {
    setSize,
    setCells
}