import React, { useState } from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(prev => !prev);
	};

	return (
		<div className={`header ${navbarOpen ? 'showMenu' : ''}`}>
			<h1 className="company">SarahLiz Fitness</h1>
			<button onClick={handleToggle}>
				{navbarOpen ? 'Close' : 'Open'}
			</button>
			<nav className="navbar">
				<ul className="menuNav">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/programs">Programs</NavLink>
					<NavLink to="/about">About</NavLink>
				</ul>
			</nav>
		</div>
	);
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
