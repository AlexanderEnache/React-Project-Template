import React, { Component } from 'react';
import axios from 'axios';
import auth from './auth';

class Friends extends Component {

    constructor(){
        super();
        this.state = {
            friends: []
        }
    }
    
    componentDidMount() {
        const user = {
            username: auth.isAuthenticated(),
            sessionID: JSON.parse(localStorage.getItem('sessionID'))
        }
        axios.post('http://localhost:5000/users/get-friends', user)
        .then(res => {
            console.log(res.data);
            this.setState({friends: res.data.friends});
        })
        .catch(err => console.log(err));
    }

    // onChangeDogName = (e) => {
    //     this.setState({
    //         dogName: e.target.value
    //     });
    // }

    // onChangeDescription = (e) => {
    //     this.setState({
    //         description: e.target.value
    //     });
    // }

    // onSubmit = (e) => {
    //     // e.preventDefault();
    //     const userIDandDog = {
    //         username: auth.isAuthenticated(),
    //         sessionID: JSON.parse(localStorage.getItem('sessionID')),
    //         name: this.state.dogName,
    //         description: this.state.description
    //     }
    //     axios.post('http://localhost:5000/users/add-dog', userIDandDog)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(err => console.log(err));
    // }

	render(){
        // console.log(this.state.user);
        const friends = this.state.friends.map(friend => {
            return(
                <li>{friend}</li>
            );
        });
        console.log(this.state);
		return (
			<div>
                <h1>friends</h1>
				<h1>{friends}</h1>
			</div>
		);
	}
}

export default Friends;