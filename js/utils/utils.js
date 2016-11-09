import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";
export function getElementByCoor(arr, x, y, size){
    let {row, col} = size;
    if( x < 0 || y < 0 || x > (col - 1) || y > (row - 1)  )
        return null
    return arr[y * col + x];
}
export function getElementByCoor2(arr, x, y, size){
    let {row, col} = size;
    if( x < 0 || y < 0 || x > (col - 1) || y > (row - 1)  )
        return null
    return {
        el: arr[y * col + x],
        coor: {x, y}
    };
}
export function createCells(size){
    let {row, col} = size;
    let livesCells = [];
    let cells = [...new Array(row * col)].map((e, i)=>{
        let status = (~~(Math.random() * 0xffff)) % 2 === 0 ? STATUS_DIE : STATUS_LIVE
        if( status === STATUS_LIVE )
        {
            let x = i % col;
            let y = (i - x) / col;
            livesCells.push({x,y});
        }
        return status;
    });
    return {
        cells: cells,
        livesCells: livesCells
    }
}
export function getNeighbors(cells, x, y, size){
    let topLeft = getElementByCoor2(cells, x - 1, y - 1, size);
    let topCenter = getElementByCoor2(cells, x, y - 1, size);
    let topRight = getElementByCoor2(cells, x + 1, y - 1, size);

    let centerLeft = getElementByCoor2(cells, x - 1, y, size);
    let centerRight = getElementByCoor2(cells, x + 1, y, size);

    let bottomLeft = getElementByCoor2(cells, x - 1, y + 1, size);
    let bottomLCenter = getElementByCoor2(cells, x, y + 1, size);
    let bottomRight = getElementByCoor2(cells, x + 1, y + 1, size);
    return [topCenter, topLeft, topRight, 
            centerLeft, centerRight, 
            bottomLeft, bottomLCenter, bottomRight].filter((e)=>e);
}
export function getLivesCount(cells){
    return cells.reduce((lives, cell)=>{
        return cell.el === STATUS_LIVE ? lives + 1 : lives;
    }, 0);
};
export function getCoorStr(coor){
    return JSON.stringify(coor);
};
export function nextStepOfcells({cells, livesCells}, size){
    let {row, col} = size;
    let newCells = [...cells];//.map(()=>STATUS_DIE);
    let newLivecellsIndex = {};
    let newLivecells = [];
    livesCells.forEach((cell)=>{
        let {x, y} = cell;
        let neighbors = getNeighbors(cells, x, y, size);
        let lives = getLivesCount(neighbors);
        newCells[y * col + x] = STATUS_DIE;
        if( lives === 2 || lives === 3 )
        {
            newLivecellsIndex[getCoorStr(cell)] = cell;
        }
        neighbors.forEach((neighbor)=>{
            let {x, y} = neighbor.coor;
            let nn = getNeighbors(cells, x, y, size);
            let lives = getLivesCount(nn);
            if( neighbor.el === STATUS_DIE )
            {
                if(lives === 3 )
                {
                    newLivecellsIndex[getCoorStr(neighbor.coor)] = neighbor.coor;
                }
            }
            else
            {
                if( lives === 2 || lives === 3 )
                {
                    newLivecellsIndex[getCoorStr(neighbor.coor)] = neighbor.coor;
                }
            }
        });
    });
    for( let key in newLivecellsIndex )
    {
        let coor = newLivecellsIndex[key];
        let {x, y} = coor;
        newCells[y * col + x] = STATUS_LIVE;
        newLivecells.push(coor);
    }
    return {
        cells: newCells,
        livesCells: newLivecells
    };
}