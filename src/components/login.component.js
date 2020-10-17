import React, { Component } from 'react';
import Auth from '../auth.js';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            repassword: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(user);
        axios.get('http://localhost:5000/users/login', user)
        .then(res => {
            console.log(res.data);
            if(res.data == ""){
                alert("");
            }else{
                Auth.login(user, () => {
                    this.props.history.push('/private');
                });
            }
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input value={this.state.username} onChange={this.onChangeUsername}/>
                <input value={this.state.password} onChange={this.onChangePassword}/>
                <button>In</button>
            </form>
        );
    }
}

export default Login;