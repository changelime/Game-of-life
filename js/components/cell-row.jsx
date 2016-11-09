import React, { Component } from "react";
import { connect } from "react-redux";
import Cell from "components/cell";
class CellRow extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        let {row, size} = this.props;
        let cells = [...new Array(size.col)].map((col, i)=>{
            return <Cell situation={row[i]} key={`0.1.${i}`}/>
        });
        return (<ul className="matrix-row">
                    {cells}
                </ul>);
    }
}
function mapStateToProps(state) {
  return {
    size: state.size
  }
}
export default connect(
    mapStateToProps
)(CellRow);