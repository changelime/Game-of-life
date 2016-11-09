import React, { Component } from "react";
import { connect } from "react-redux";
import CellRow from "components/cell-row";
class CellMatrix extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        let {size, cells} = this.props;
        let rows = [...new Array(size.row)].map((row, i)=>{
            let start = i * size.col;
            let end = start + size.col;
            return <CellRow row={cells.slice(start, end)} key={`0.0.${i}`}/>
        });
        return (<div id="matrix">
                    {rows}
                </div>);
    }
}
function mapStateToProps(state) {
  return {
    cells: state.cells,
    size: state.size
  }
}
export default connect(
    mapStateToProps
)(CellMatrix);