import React from 'react';
import '../styles/application.css';

function Application(props) {
	const modalOpen = props.modalOpen;
	// if (modalOpen);
	return (
		<div>
			<div id="overlay">
				<div id="modal">
					<h2>Contact Details</h2>
					<p>Name: John Doe</p>
					<p>Address: Lorem Ipsum st.</p>
					<p>Email: johndoe@webdev.dev (no spam please!)</p>
					<span className="close">&times;</span>
				</div>
			</div>
		</div>
	);
}

export default Application;
