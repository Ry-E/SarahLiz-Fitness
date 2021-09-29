import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import '../styles/header.css';
import Modal from './ModalComponent';
import { NavLink } from 'react-router-dom';

function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(prev => !prev);
	};

	const handleToggle = () => {
		setNavbarOpen(prev => !prev);
	};

	// const closeMenu = () => {
	// 	setNavbarOpen(false);
	// };

	window.onscroll = function () {
		scrollNav();
	};

	function scrollNav() {
		if (
			document.body.scrollTop > window.innerHeight ||
			document.documentElement.scrollTop > window.innerHeight
		) {
			document.getElementById('header').className = 'header';
		} else {
			document.getElementById('header').className = 'fixed_nav';
		}
	}

	return (
		<div className="fixed_nav" id="header">
			<button className="hamburger" onClick={toggleModal}>
				{modalOpen ? (
					<MdClose
						style={{
							padding: '0',
							color: 'white',
							width: '40px',
							height: '40px',
						}}
					/>
				) : (
					<FiMenu
						style={{
							padding: '0',
							color: 'white',
							width: '40px',
							height: '40px',
						}}
					/>
				)}
			</button>
			<NavLink className="company" to="/" exact>
				SarahLiz Fitness
			</NavLink>
			<nav className="navBar">
				<Modal onClose={toggleModal} modalOpen={modalOpen}>
					<ul className={`menuNav ${modalOpen ? 'shown' : 'hidden'}`}>
						<NavLink
							id="navlink"
							to="/"
							onClick={handleToggle}
							exact
						>
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
				</Modal>
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
