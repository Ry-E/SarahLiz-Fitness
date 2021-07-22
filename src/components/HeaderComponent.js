import React, { Component } from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1 className="company">SarahLiz Fitness</h1>
				<ul className="navbar">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/programs">Programs</NavLink>
					<NavLink to="/about">About</NavLink>
				</ul>
			</div>
		);
	}
}

export default Header;

// constructor(props) {
// 		super(props);

// 		this.state = {
// 			isNavOpen: false,
// 		};

// 		this.toggleNav = this.toggleNav.bind(this);
// 	}

// 	toggleNav() {
// 		this.setState({
// 			isNavOpen: !this.state.isNavOpen,
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<Navbar light sticky="top" expand="md">
// 					<div className="container">
// 						<NavbarBrand className="mr-auto" href="/">
// 							NuCamp
// 						</NavbarBrand>
// 					</div>
// 				</Navbar>
// 				<div>poppty</div>
// 			</div>
// 		);
// 	}
