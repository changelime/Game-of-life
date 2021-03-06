import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";
export function getElementByCoor(arr, x, y, size){
    let {row, col} = size;
    if( x < 0 || y < 0 || x > (col - 1) || y > (row - 1)  )
        return null
    return arr[y * col + x];
}

export function getElementByCoor2(arr, x, y, size){
    let {row, col} = size;
    let index = y * col + x;
    if( x < 0 || y < 0 || x > (col - 1) || y > (row - 1)  )
        return null
    return {
        el: arr[index],
        index: index
    };
}
export function getCoorByIndex(index, size) {
    let {row, col} = size;
    let x = index % col;
    let y = (index - x) / col;
    return {
        x,
        y
    }
}
export function getIndexByCoor(coor, size) {
    let {x, y} = coor;
    return y * size.col + x;
}
export function createCells(size){
    let {row, col} = size;
    let livesCells = [];
    let cells = [...new Array(row * col)].map((e, i)=>{
        let status = (~~(Math.random() * 0xffff)) % 2 === 0 ? STATUS_DIE : STATUS_LIVE
        if( status === STATUS_LIVE )
        {
            livesCells.push(i);
        }
        return status;
    });
    return {
        cells: cells,
        livesCells: livesCells
    }
}
export function getNeighbors(cells, index, size){
    let {x, y} = getCoorByIndex(index, size);
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

export function nextStepOfcells(cells, livesCells, size){
    let {row, col} = size;
    let newCells = [...cells];
    let newLivecells = [];
    let calculated = [];//标记已经计算过的节点
    for( let i = 0; i < livesCells.length; i++ )
    {
        let index = livesCells[i];
        let neighbors = getNeighbors(cells, index, size);
        let lives = getLivesCount(neighbors);
        newCells[index] = STATUS_DIE;//原来存活状态的节点默认先置为死亡
        if( lives === 2 || lives === 3 )
        {
            newCells[index] = STATUS_LIVE;//周围为2或3个存活节点，节点为存活
            newLivecells.push(index);
        }
        
        neighbors.filter((e)=>{
            return e.el === STATUS_DIE && !calculated[e.index];//确保遍历道德周围邻居都是死亡而且没有被标记过
        }).forEach((neighbor)=>{
            let index = neighbor.index;
            let lives = getLivesCount(getNeighbors(cells, index, size));
            calculated[index] = true;//标记已经计算过的节点
            if(lives === 3 )
            {                
                newLivecells.push(index);
                newCells[index] = STATUS_LIVE;
            } 
        });
    }
    return {
        cells: newCells,
        livesCells: newLivecells
    };
}