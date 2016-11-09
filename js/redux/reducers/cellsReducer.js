import * as actions from "actions/index.js";

export default function(state = {}, action){
    switch (action.type) 
    {
        case actions.SET_CELLS.type:
            return Object.assign({}, state, {
                cells: [...action.payload.cells]
            });
        case actions.SET_SIZE.type:
            return Object.assign({}, state, {
                size: action.payload.size
            });
        case actions.SET_LIVES_CELLS.type:
            return Object.assign({}, state, {
                livesCells: [...action.payload.livesCells]
            });
        default: return state;
    }
}