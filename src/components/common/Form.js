import React from "react";
import Button from "./Button";
// import Input from "./Input";

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: "",
                password: ""
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleSubmit() {
        console.log(this.state.user);
    }

    handleInputChange(e) {
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
            <form className="form sign-in__form">
                <h2 className="sign-in__title">Please sign in</h2>
                <div className="form__input-section">
                    <input
                        className="input mb-10"
                        value={this.state.user.email}
                        type="text"
                        name="email"
                        onChange={this.handleInputChange}
                    />
                    <input
                        className="input  mb-10"
                        value={this.state.user.password}
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                    />
                    {/*{this.props.inputsSettings.map(inp => {*/}
                    {/*    return (*/}
                    {/*        <input*/}
                    {/*            className="input  mb-10"*/}
                    {/*            value='test'*/}
                    {/*            type={inp.type}*/}
                    {/*            name={inp.name}*/}
                    {/*        />*/}
                    {/*    );*/}
                    {/*})}*/}
                </div>


                <Button onClick={(event) => {
                    this.props.onSubmit(this.state.user);
                    event.preventDefault();
                }} className='tets' isDisabled={false}
                        appearance={{size: 'lg', color: 'blue'}}>Sign
                    in</Button>
            </form>
        );
    }
}
