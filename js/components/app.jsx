import React, { Component } from "react";
import { connect } from "react-redux";
import {setCells} from "actions/index.js";
import { createCells } from "utils/utils";
import CellMatrixCanvas from "components/cell-matrix-canvas";
import CtrlPanel from "components/ctrl-panel";
class App extends Component {
    constructor (props, context) {
        super(props, context);
    }
    componentDidMount(){
        this.props.init(this.props.size);
    }
    render () {
        return (<div id="wapper">
                    <CellMatrixCanvas />
                    <CtrlPanel />
                </div>);
    }
}
function mapStateToProps(state) {
  return {
    size: state.size
  }
}
function mapDispatchToProps(dispatch) {
  return {
    init: function init(size){
        let cells = createCells(size);
        dispatch(setCells(cells));
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);