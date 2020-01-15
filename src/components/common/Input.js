import React from "react";

export default class Input extends React.Component {
    render() {
        return (
            <input
                className="input mb-10"
                value={this.state.user.email}
                type="text"
                name="email"
                onChange={this.handleInputChange}
            />
        );
    }
}
