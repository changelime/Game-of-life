import * as actions from "actions/index.js";
import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";
import {getCoorByIndex, getIndexByCoor} from "utils/utils.js";
export default function(state = {}, action){
    switch (action.type) 
    {
        case actions.SET_CELLS.type:
            return Object.assign({}, state, {
                cells: [...action.payload.cells]
            });
        case actions.SET_SIZE.type:
            const newSize = action.payload.size;
            const oldSize = state.size;
            const {row, col} = newSize;
            const oldLivesCells = state.livesCells;
            let newCells = new Array(row * col).fill(STATUS_DIE);
            let newLivesCells = oldLivesCells.map((oldCellIndex)=>{//新旧索引转换
                let oldCoor = getCoorByIndex(oldCellIndex, oldSize);
                let newCellIndex = getIndexByCoor(oldCoor, newSize);
                newCells[newCellIndex] = STATUS_LIVE;
                return newCellIndex
            });
            return Object.assign({}, state, {
                size: {row,col},
                cells: newCells,
                livesCells: newLivesCells
            });
        case actions.SET_LIVES_CELLS.type:
            return Object.assign({}, state, {
                livesCells: [...action.payload.livesCells]
            });
        default: return state;
    }
}