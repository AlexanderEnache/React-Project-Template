import axios from 'axios';

class Auth{
	constructor(){
		this.isAuth = false;
	}

	login(user, cb){
		localStorage.setItem('user', JSON.stringify(user));
		this.isAuth = true;
		console.log(localStorage.setItem('user', JSON.stringify(user)));
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

export default new Auth;