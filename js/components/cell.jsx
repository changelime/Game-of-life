import React, { Component } from "react";
import {STATUS_DIE} from "utils/cell-status.js";
class Cell extends Component {
    constructor (props, context) {
        super(props, context);
    }
    render () {
        let situation = this.props.situation;
        return (<li className={
            `cell ${(situation === STATUS_DIE) ? "die" : "live"} `
        }></li>);
    }
}

export default Cell;