import React, { Component } from "react";
class NumberButton extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            number: props.min
        };
    }
    onChange(event){
        this.state = {
            number: +event.target.value
        };
    }
    onClick(event){
        this.props.onClick(this.state.number);
    }
    render () {
        return (
            <div className="input-button">
                <label>{this.props.frontLabel}</label>
                <input type="number" onChange={this.onChange.bind(this)} min={this.props.min} defaultValue={this.props.min} ref="input" />
                <label>{this.props.endLabel}</label>
                <button onClick={this.onClick.bind(this)}>{this.props.label}</button>
            </div>
        );
    }
}

export default NumberButton;