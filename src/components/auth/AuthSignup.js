import React from 'react';
import Form from "../common/Form";

export default class AuthSignup extends React.Component {


    handleSubmit(form) {
        console.log(form);
    }

    render() {
        const inputsSettings = [
            {name: 'name', type: 'text', placeholder: 'Name', value: ''},
            {name: 'email', type: 'email', placeholder: 'Email address', value: ''},
            {name: 'password', type: 'password', placeholder: 'Password', value: ''},
            {name: 'confirmPassword', type: 'password', placeholder: 'Confirm', value: ''},
        ];
        return (<Form
            onSubmit={this.handleSubmit}
            inputsSettings={inputsSettings}
            title='Please sign up'
            buttonText='Sigh up'
        />);
    }
}
