import React, { Component } from 'react';
import Auth from './auth.js';
import axios from 'axios';

class FindDogs extends Component {
    constructor(props){
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangePassword = this.onChangePassword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            users: []
        }
    }

    // onChangeUsername(e){
    //     this.setState({
    //         username: e.target.value
    //     });
    // }

    // onChangePassword(e){
    //     this.setState({
    //         password: e.target.value
    //     });
    // }

    componentDidMount(){
        axios.post('http://localhost:5000/users/find-dogs')
        .then(res => {
            this.setState({
                users: res.data
            });
        })
        .catch(err => console.log(err));
    }

    Connect = (user, dog) => {
        console.log(user);
        console.log(dog);

        let username = JSON.parse(localStorage.getItem('username'));
        let sessionID = JSON.parse(localStorage.getItem('sessionID'));
        
        axios.post('http://localhost:5000/users/add-friend', {username: username, sessionID: sessionID, dogName: dog.name, friendName: user.username})
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    onSubmit(e){
        e.preventDefault();
        // const user = {
        //     username: this.state.username,
        //     password: this.state.password
        // }
        // console.log(user);
        axios.post('http://localhost:5000/users/find-dogs')
        .then(res => {
            console.log(res);
            // if(res.data == null){
            //     alert("Incorrect username or password");
            // }else{
            //     Auth.login(user, () => {
            //         this.props.rerender();
            //         this.props.history.push('/private');
            //     });
            // }
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div>
                <h1>Find Dogs</h1>
                <ul>{this.state.users.map(user => {
                    return(
                        <ul key={user._id}>
                            {user.dogs.map(dog => {
                                return(
                                    <li key={dog._id}>{dog.name}, {user.username} <button onClick={() => {this.Connect(user, dog)}}>connect</button></li>
                                )
                            })}
                        </ul>
                    );
                })}</ul>
            </div>
        );
    }
}

export default FindDogs;