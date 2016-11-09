import React, { Component } from "react";
import { connect } from "react-redux";
import drawCells from "../utils/draw-cells.js";
class CellMatrixCanvas extends Component {
    constructor (props, context) {
        super(props, context);
    }
    componentDidUpdate(prevProps, prevState)
    {
        let {livesCells, size} = this.props;
        drawCells(this.refs.canvas, livesCells, size);
    }
    render () {
        return (<canvas width="800" height="800" ref="canvas" ></canvas>);
    }
}
function mapStateToProps(state) {
  return {
    livesCells: state.livesCells,
    size: state.size
  }
}
export default connect(
    mapStateToProps
)(CellMatrixCanvas);