import React from 'react';
import Button from "../common/Button";

export default class AuthSignin extends React.Component{
    constructor() {
        super();
        this.state = {
            user: {
                email: "",
                password: ""
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit() {
        // this.setState({
        //   ...this.state,
        //   user: {
        //     ...this.state.user,
        //     email: "test@email.com",
        //     password: "123"
        //   }
        // });
    }

    handleInputChange = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        return (
            <form className="form">
                <div className="form__section">
                    <label htmlFor="email">Email</label>
                    <input
                        value={this.state.user.email}
                        type="text"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form__section">
                    <label htmlFor="password">Password</label>
                    <input
                        value={this.state.user.password}
                        type="text"
                        name="password"
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="form__section">
                    <Button onClick={this.handleSubmit} content="Submit" />
                </div>
            </form>
        );
    }
}
