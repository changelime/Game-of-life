import Node from "./node";
import {STATUS_DIE, STATUS_LIVE} from "utils/cell-status.js";
function lineTo(context, start, end, color){
	context.save();
	context.strokeStyle = color ? color : "rgba(0, 0, 255, 0.5)";
	context.beginPath();
	context.moveTo(start.x, start.y);
	context.lineTo(end.x, end.y);
	context.stroke();
	context.closePath();
	context.restore();
}

var drawCells = function drawCells(el, cells, size) {
    let context = el.getContext("2d");
    let width = el.width;
    let height = el.height;
    let {row, col} = size;
    let w = (width / col);
    let h = (height / row);
    let radius = Math.min(w, h) / 2;
    context.clearRect(0, 0, width, height);
    for( let i = 1; i < col; i++ )
    {
        let x = (w * i);
        lineTo(context, {
            x: x,
            y: 0
        }, {
            x: x,
            y: height
        });
    }
    for( let i = 1; i < row; i++ )
    {
        let y = (h * i);
        lineTo(context, {
            x: 0,
            y: y
        }, {
            x: width,
            y: y
        });
    }
    cells.forEach((cell)=>{
        let node = new Node((cell.x + 0.5) * w, (cell.y + 0.5) * h, radius);
        node.setColor("yellowgreen");
        node.draw(context);
    });
};

export default drawCells;