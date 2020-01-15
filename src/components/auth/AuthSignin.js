import React from 'react';
import Form from "../common/Form";

export default class AuthSignin extends React.Component {


    handleSubmit(form) {
        console.log(form);
    }

    render() {
        const inputsSettings = [
            {name: 'email', type: 'email', placeholder: 'Email address', value: ''},
            {name: 'password', type: 'password', placeholder: 'Password', value: ''},
        ];
        return (<Form
            onSubmit={this.handleSubmit}
            inputsSettings={inputsSettings}
            title='Please sign in'
            buttonText='Sigh in'
        />);
    }
}
