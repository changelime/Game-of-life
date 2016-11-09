import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";
export function getElementByCoor(arr, x, y, size){
    let {row, col} = size;
    if( x < 0 || y < 0 || x > (col - 1) || y > (row - 1)  )
        return null
    return arr[y * col + x];
}
export function createCells(size){
    return [...new Array(size.row * size.col)].map(()=>{
        return (~~(Math.random() * 0xffff)) % 2 === 0 ? 
                    STATUS_DIE : STATUS_LIVE
    });
}
export function nextStepOfcells(cells, size){
    let {row, col} = size;
    let newCells = [...cells];
    for( let y = 0; y < row; y++)
    {
        for( let x = 0; x < col; x++)
        {
            let topLeft = getElementByCoor(cells, x - 1, y - 1, size);
            let topCenter = getElementByCoor(cells, x, y - 1, size);
            let topRight = getElementByCoor(cells, x + 1, y - 1, size);

            let centerLeft = getElementByCoor(cells, x - 1, y, size);
            let centerRight = getElementByCoor(cells, x + 1, y, size);

            let bottomLeft = getElementByCoor(cells, x - 1, y + 1, size);
            let bottomLCenter = getElementByCoor(cells, x, y + 1, size);
            let bottomRight = getElementByCoor(cells, x + 1, y + 1, size);
            
            let lives = [topCenter, topLeft, topRight, 
                            centerLeft, centerRight, 
                            bottomLeft, bottomLCenter, bottomRight].reduce((lives, cell)=>{
                return cell === STATUS_LIVE ? lives + 1 : lives;
            }, 0);

            if( newCells[y * col + x] === STATUS_LIVE )
            {
                if( lives < 2 )
                {
                    newCells[y * col + x] = STATUS_DIE;
                }
                else if( lives > 3 )
                {
                    newCells[y * col + x] = STATUS_DIE;
                }
            }
            else
            {
                if( lives === 3 )
                {
                    newCells[y * col + x] = STATUS_LIVE;
                }
            }
        }
    }
    return newCells;
}