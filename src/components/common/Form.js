import React from "react";
import Button from "./Button";
import {ErrorMessage} from "./ErrorMessage"
import Input from "./Input";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        let formInputs = {};
        this.props.inputsSettings.map(value => formInputs[value.name] = {
            value: value.value,
            valid: false,
            errorMessage: ''
        });
        this.state = formInputs;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
                [name]: {
                    ...this.state[name],
                    value: value,
        }

        }, () => {
            this.validateField(name, value)
        });
    };

    validateField(fieldName, value) {
        switch (fieldName) {
            case 'confirmPassword':
                this.setState({
                    [fieldName]: {
                        ...this.state[fieldName],
                        valid: (this.state.password.value === value),
                        errorMessage: (this.state.password.value === value) ? '' : 'Passwords do not match'
                    },
                });
                break;
            default:
                this.setState({
                    [fieldName]: {
                        ...this.state[fieldName],
                        valid: true
                    }
                });
                break;
        }
    }

    isFormValid() {
        for (let key in this.state){
            if(!this.state[key].valid){
                return false;
            }
        }
        return true;
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'input_error');
    }

    render() {
        return (
            <form className="form sign-in__form">
                <h2 className="form__title">{this.props.title}</h2>
                <ErrorMessage formData={this.state} />
                    <div className="form__input-section">
                        {this.props.inputsSettings.map(inp => {
                            return (
                                <Input
                                    key={inp.name}
                                    className={`input  mb-10 ${this.errorClass(this.state[inp.name].errorMessage)}`}
                                    value={this.state[inp.name].value}
                                    type={inp.type}
                                    name={inp.name}
                                    placeholder={inp.placeholder}
                                    onChange={this.handleInputChange}
                                />
                            );
                        })}
                    </div>

                    <Button onClick={(event) => {
                        this.props.onSubmit(this.state.form);
                        event.preventDefault();
                    }} className='tets' isDisabled={!this.isFormValid()}
                            appearance={{size: 'lg', color: 'blue'}}>{this.props.buttonText}</Button>
                </form>
        );
    }
}
