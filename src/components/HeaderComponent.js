import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import '../styles/header.css';
import Nav from './NavComponent';
import Modal from './ModalComponent';
import { NavLink } from 'react-router-dom';

function Header() {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(prev => !prev);
	};

	var navBackground = 'transparent';

	window.onscroll = function () {
		scrollNav(navBackground);
	};

	function scrollNav(navBackground) {
		// console.log(navBackground);
		if (
			document.body.scrollTop > window.innerHeight ||
			document.documentElement.scrollTop > window.innerHeight
		) {
			document.getElementById('header').className = 'header';
		} else {
			document.getElementById('header').className = 'fixed_nav';
		}
	}
	let style = {
		button: {
			display: 'none',
		},
		div: {
			backgroundColor: `${navBackground}`,
		},
		nav: {
			display: 'block',
		},
	};

	return (
		<header className="fixed_nav" id="header">
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
			<NavLink className="company" id="company" to="/" exact>
				SarahLiz Fitness
			</NavLink>
			<Nav style={style.div} />
			<nav className="navBar">
				<Modal
					onClose={toggleModal}
					modalOpen={modalOpen}
					style={style.button}
				>
					<ul className={`menuNav ${modalOpen ? 'shown' : 'hidden'}`}>
						{/* <Nav style={style.div} /> */}
						<NavLink
							id="navlink"
							to="/"
							onClick={toggleModal}
							exact
						>
							Home
						</NavLink>
						<NavLink
							id="navlink"
							to="/programview"
							onClick={toggleModal}
							exact
						>
							Programs
						</NavLink>
						<NavLink
							id="navlink"
							to="/about"
							onClick={toggleModal}
							exact
						>
							About
						</NavLink>
					</ul>
				</Modal>
			</nav>
		</header>
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
