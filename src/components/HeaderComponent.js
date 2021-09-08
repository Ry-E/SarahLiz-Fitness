import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(prev => !prev);
	};

	// const closeMenu = () => {
	// 	setNavbarOpen(false);
	// };

	return (
		<div className="header">
			<h1 className="company">SarahLiz Fitness</h1>
			<button onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose
						style={{
							color: 'white',
							width: '40px',
							height: '40px',
						}}
					/>
				) : (
					<FiMenu
						style={{
							color: 'white',
							width: '40px',
							height: '40px',
						}}
					/>
				)}
			</button>
			<nav className={`navBar ${navbarOpen ? 'down' : ''}`}>
				<ul className="menuNav">
					<NavLink id="navlink" to="/" onClick={handleToggle} exact>
						Home
					</NavLink>
					<NavLink
						id="navlink"
						to="/programview"
						onClick={handleToggle}
						exact
					>
						Programs
					</NavLink>
					<NavLink
						id="navlink"
						to="/about"
						onClick={handleToggle}
						exact
					>
						About
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default Header;

// style={{ opacity: navbarOpen ? '1' : '0' }}

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
