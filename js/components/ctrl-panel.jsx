import React, { Component } from "react";
import { connect } from "react-redux";
import { createCells, nextStepOfcells } from "utils/utils";
import { setCells, setLivesCells} from "actions/index.js";
import Button from "components/button";
import NumberButton from "components/number-button";
class CtrlPanel extends Component {
    constructor (props, context) {
        super(props, context);
    }
    nextStep(){
        let {next, cells, livesCells, size} = this.props;
        next(cells, livesCells, size);
    }
    nextNStep(steps){
        let nextStep = this.nextStep.bind(this);
        (function run(){
            nextStep();
            if( --steps > 0 )
            {
                requestAnimationFrame(run);
            }
        })();
    }
    reset(){
        let {init, size} = this.props;
        init(size);
    }
    render () {
        return (<div id="ctrl-panel">
                    <div className="button-group"> 
                        <Button onClick={this.reset.bind(this)}  label="Reset" />
                        <Button onClick={this.nextStep.bind(this)}  label="Next Step" />
                    </div>
                    <div className="button-group"> 
                        <NumberButton
                            frontLabel="Go to"
                            endLabel="steps"
                            min={50}
                            onClick={this.nextNStep.bind(this)}  label="Go" />
                    </div>
                </div>);
    }
}
function mapStateToProps(state) {
  return {
    livesCells: state.livesCells,
    cells: state.cells,
    size: state.size
  }
}

function mapDispatchToProps(dispatch) {
  return {
    init: function init(size){
        let {cells, livesCells} = createCells(size);
        dispatch(setCells(cells));
        dispatch(setLivesCells(livesCells));
    },
    next: function next(cells, livesCells, size){
        let result = nextStepOfcells(cells, livesCells, size);
        dispatch(setCells(result.cells));
        dispatch(setLivesCells(result.livesCells));
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CtrlPanel);