import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRepassword = this.onChangeRepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // this.onSubmit = this.onSubmit.bind(this);

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

    onChangeRepassword(e){
        this.setState({
            repassword: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            repassword: this.state.repassword
        }
        // console.log(user);
        axios.post('http://localhost:5000/users/add', user)
        .then(res => {
            console.log(res.data);
            if(res.data == "password-not-match"){
                alert("Your passwords did not match");
                this.setState({password: '', repassword: ''});
            }else if(res.data == "username-already-exists"){
                alert("That username already exists");
                this.setState({username: ''});
            }else{
                window.location.replace("/private");
            }
        })
        .catch(res => console.log(res));
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input value={this.state.username} onChange={this.onChangeUsername}/>
                <input value={this.state.password} onChange={this.onChangePassword}/>
                <input value={this.state.repassword} onChange={this.onChangeRepassword}/>
                <button>In</button>
            </form>
        );
    }
}

export default SignUp;