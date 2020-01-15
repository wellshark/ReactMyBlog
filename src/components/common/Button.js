import React from "react";

export default class Button extends React.Component {

    generateClassList() {
        const appearance = this.props.appearance;
        let classList = '';
        for (let key in appearance) {
            if (key === 'color') {
                if (this.props.isDisabled) {
                    classList += ' button_gray';
                    break;
                }
            }
            classList += ' button_' + appearance[key];
        }
        return classList;
    }

    render() {
        return (
            <button
                className={"button" + this.generateClassList()}
                disabled={this.props.isDisabled}
                onClick={this.props.onClick}
            >{this.props.children}</button>
        );
    }
}
