import React, { Component } from 'react';
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
		};
	}

	render() {
		const programView = this.state.programs.map(program => {
			return (
				<div key={program.id} className="cards">
					<Card>
						<CardImg
							top
							className={program.class}
							src={program.image}
							alt={program.name}
						/>
						<CardBody>
							<CardTitle>{program.name}</CardTitle>
							<CardText>{program.description}</CardText>
							<Button className="card_apply_button">Start</Button>
						</CardBody>
					</Card>
				</div>
			);
		});

		return (
			<div className="view_container">
				<div className="program_content">
					<div>
						<div>test</div>
					</div>
					{/* <div className="program_cards">{programView}</div> */}
				</div>
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
