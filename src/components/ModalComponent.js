import React from 'react';
import '../styles/modal.css';

function Modal(props) {
	const closeModal = e => {
		props.onClose(e);
	};

	if (!props.modalOpen) {
		console.log('modal is closed');
		return null;
	} else {
		return (
			<div>
				<div id="overlay">
					<div id="modal">
						<button className="close" onClick={closeModal}>
							&times;
						</button>
						<div>{props.children}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;
