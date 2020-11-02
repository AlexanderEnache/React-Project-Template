import React, { Component } from 'react';
import axios from 'axios';
import auth from './auth';

class AddDog extends Component {

    constructor(){
        super();
        this.state = {
            dogName: '',
            description: '',
            dogs: []
        }
    }
    
    componentDidMount() {
        const user = {
            username: auth.isAuthenticated(),
            sessionID: JSON.parse(localStorage.getItem('sessionID'))
        }

        axios.post('http://localhost:5000/users/get-dog', user)
        .then(res => {
            console.log(res);
            this.setState({dogs: res.data.dogs});
        })
        .catch(err => console.log(err));
    }

    onChangeDogName = (e) => {
        this.setState({
            dogName: e.target.value
        });
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit = (e) => {
        // e.preventDefault();
        const userIDandDog = {
            username: auth.isAuthenticated(),
            sessionID: JSON.parse(localStorage.getItem('sessionID')),
            name: this.state.dogName,
            description: this.state.description
        }
        axios.post('http://localhost:5000/users/add-dog', userIDandDog)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }

	render(){
        const dogs = this.state.dogs.map(dog => {
            return(
                <li key={dog._id}>{dog.name}</li>
            );
        });
		return (
			<div>
				<h1>Add Dog</h1>
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.dogName} onChange={this.onChangeDogName}/>
                    <input value={this.state.description} onChange={this.onChangeDescription}/>
                    <button>In</button>
                </form>
                <ul>{dogs}</ul>
			</div>
		);
	}
}

export default AddDog;