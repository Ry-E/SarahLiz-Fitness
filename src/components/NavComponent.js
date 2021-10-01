import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

function Nav(props) {
	return (
		<nav className="nav_bar" style={props.style}>
			<NavLink className="company" to="/" exact>
				SarahLiz Fitness
			</NavLink>
			<div className="navlinks">
				<NavLink className="navlink" id="navlink" to="/" exact>
					Home
				</NavLink>
				<NavLink
					className="navlink"
					id="navlink"
					to="/programview"
					exact
				>
					Programs
				</NavLink>
				<NavLink className="navlink" id="navlink" to="/about" exact>
					About
				</NavLink>
				<a className="navlink" id="navlink" href="#main_footer">
					Contact
				</a>
			</div>
			<div
				className="company"
				style={{
					display: 'none',
					visibility: 'hidden',
					marginLeft: 'auto',
					marginRight: '0',
				}}
			>
				SarahLiz Fitness
			</div>
		</nav>
	);
}

export default Nav;
