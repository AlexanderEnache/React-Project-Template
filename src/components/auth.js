import axios from 'axios';
import react, { Component } from 'react';

class Auth extends Component{
	constructor(){
		super();
		this.isAuth = false;
		// this.state = {
		// 	username: '',
		// 	sessionID: ''
		// }
	}

	// async componentDidMount(){
	// 	const username = JSON.parse(localStorage.getItem('username'));
	// 	const password = JSON.parse(localStorage.getItem('password'));

	// 	let user = "";
	// 	let pass = "";

	// 	console.log(username + ' ' + password);
		
	// 	if(username && password){
	// 		// console.log("True");
	// 		await axios.post('http://localhost:5000/users/authentication', {username: username, password: password})
	// 		.then(res => {
	// 			this.setState({
	// 				username: res.data.username,
	// 				sessionID: res.data.password
	// 			});
	// 		})
	// 		.catch(err => console.log(err));
	// 		// return false;
	// 	}
	// }

	login(user, cb){
		localStorage.setItem('username', JSON.stringify(user.username));
		localStorage.setItem('password', JSON.stringify(user.password));
		this.isAuth = true;
		cb();
	}

	logout(cb){
		this.isAuth = false;
		console.log(this.isAuth);
		cb();
	}

	isAuthenticated(){
		return this.isAuth;
	}
}
// 514 903 9589   ogs1008
export default new Auth;