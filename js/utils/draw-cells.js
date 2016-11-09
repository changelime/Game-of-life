import Node from "./node";
import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";


var drawCells = function drawCells(el, cells, size) {
    let context = el.getContext("2d");
    let width = el.width;
    let height = el.height;
    let {row, col} = size;
    let cellSize = (width / row);

    context.clearRect(0, 0, width, height);
    // for( let y = 0; y < row; y++)
    // {
    //     for( let x = 0; x < col; x++)
    //     {
    //         let node = new Node((x+0.5) * cellSize, (y+0.5) * cellSize, cellSize / 2);
    //         if( cells[y * col + x] === STATUS_LIVE )
    //         {
    //             node.setColor("white");   
    //         }
    //         else
    //         {
    //             node.setColor("black");  
    //         }
    //         node.draw(context);
    //     }
    // }
    cells.forEach((cell)=>{
        let node = new Node((cell.x + 0.5) * cellSize, (cell.y + 0.5) * cellSize, cellSize / 2);
        node.setColor("gray");
        node.draw(context);
    });
};

export default drawCells;