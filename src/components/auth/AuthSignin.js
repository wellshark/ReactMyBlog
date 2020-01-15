import React from 'react';
import Form from "../common/Form";

export default class AuthSignin extends React.Component {


    handleSubmit(form){
        console.log(form);
    }
    // className="input mb-10"
    // value={this.state.user.email}
    // type="text"
    // name="email"
    // onChange={this.handleInputChange}
    render() {
        const inputsSettings = [
            {name: 'email', type:'email', placeholder: 'Email address',},
            {name: 'password', type:'password', placeholder: 'Password',},
            ];
        return ( <Form onSubmit={this.handleSubmit} inputsSettings={inputsSettings}/> );
    }
}
