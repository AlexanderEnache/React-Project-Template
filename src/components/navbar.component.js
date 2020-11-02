import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './auth';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar, Nav, NavItem} from 'react-bootstrap';

class Navbar extends Component {
	constructor(props){
        super(props);
    }

	render(){
		let user = Auth.isAuthenticated();
		console.log(user);
		if(user){
			return (
				<Nav
				activeKey="/"
				// onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
					<Nav.Item><Nav.Link>You are logged in as {user}</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/">Public</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/private">Private</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/add-dog">Add Dog</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/find-dogs">Find Dogs</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/friends">Friends</Nav.Link></Nav.Item>
				</Nav>
			);
		}else{
			return (
				<Nav
				activeKey="/"
				// onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
					<Nav.Item><Nav.Link as={Link} to="/login">Login</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/">Public</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/private">Private</Nav.Link></Nav.Item>
					<Nav.Item><Nav.Link as={Link} to="/sign-up">Sign-Up</Nav.Link></Nav.Item>
				</Nav>
			);
		}
	}
}

export default Navbar;
