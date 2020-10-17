import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../auth';

class Navbar extends Component {
	constructor(props){
        super(props);
    }

	render(){
		let vp = Auth.isAuthenticated();
		console.log(vp + " Check " + Date());
		if(vp){
			return (
				<nav>
					{/* <Link to={`/login`}>Login</Link> */}
					<Link to={`/private`}>Private</Link>
				</nav>
			);
		}else{
			return (
				<nav>
					<Link to={`/login`}>Login</Link>
					<Link to={`/public`}>Public</Link>
					<Link to={`/private`}>Private</Link>
					<Link to={`/sign-up`}>Sign-Up</Link>
				</nav>
			);
		}
	}
}

export default Navbar;
