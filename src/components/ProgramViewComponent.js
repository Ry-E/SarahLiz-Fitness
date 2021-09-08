import React, { Component } from 'react';
import Modal from './ModalComponent';
import Form from './FormComponent';
import { PROGRAMS } from '../shared/programs';
import '../styles/programView.css';
import {
	Card,
	CardImg,
	Button,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';

class ProgramView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			programs: PROGRAMS,
			modalOpen: false,
		};
	}

	render() {
		// Modal state toggles on button click
		const openModal = () => {
			this.setState({ modalOpen: true });
		};

		const closeModal = () => {
			this.setState({ modalOpen: false });
		};

		// Displays all programs stored in PROGRAMS array
		const programView = this.state.programs.map(program => {
			return (
				<div key={program.id} className="cards">
					<CardTitle className="title">{program.name}</CardTitle>
					<Card>
						<CardImg
							top
							className={program.class}
							src={program.image}
							alt={program.name}
						/>
						<CardBody>
							<CardText>{program.description}</CardText>
							<Button
								className="card_apply_button"
								onClick={openModal}
							>
								Start
							</Button>
						</CardBody>
					</Card>
				</div>
			);
		});

		return (
			<div className="view_container">
				<div className="program_content">
					<div className="cards_container">{programView}</div>
				</div>
				<Modal onClose={closeModal} modalOpen={this.state.modalOpen}>
					<Form />
				</Modal>
			</div>
		);
	}
}

export default ProgramView;

// <Card>
// 	<CardTitle>
// 		<CardBody>
// 			{program.name}
// 			<CardImg
// 				className=""
// 				width="100%"
// 				src={program.image}
// 				alt={program.name}
// 			/>
// 			<CardImgOverlay>
// 				<CardTitle>{program.name}</CardTitle>
// 			</CardImgOverlay>
// 		</CardBody>
// 	</CardTitle>
// </Card>;
