import React, { Component } from 'react';
import { PROGRAMS } from '../shared/programs';
import '../styles/program.css';
import {
	Card,
	CardImg,
	Button,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';

class Programs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProgram: null,
			programs: PROGRAMS,
		};
	}

	onProgramSelect(program) {
		if (this.state.selectedProgram == null) {
			this.setState({ selectedProgram: program });
		} else if (this.state.selectedProgram == program) {
			this.setState({ selectedProgram: null });
		} else {
			this.setState({ selectedProgram: program });
		}
	}

	renderSelectedProgram(program) {
		if (program) {
			return (
				<Card className="selected_card border-0">
					<CardImg top src={program.image} alt={program.name} />
					<CardBody>
						{/* <CardTitle>{program.name}</CardTitle> */}
						<CardText>{program.description}</CardText>
						<Button className="card_apply_button">Start</Button>
					</CardBody>
				</Card>
			);
		}
		return <div />;
	}

	render() {
		const program = this.state.programs.map(program => {
			return (
				<div key={program.id} className="col-xs-4 m-1">
					<Card
						className={`card_tab border-0 ${
							this.state.selectedProgram == program
								? 'highlight'
								: ''
						}`}
						onClick={() => this.onProgramSelect(program)}
					>
						<CardTitle>
							<CardBody>{program.name}</CardBody>
						</CardTitle>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row program_tabs">{program}</div>
				<div className="row selected_card_container">
					{/* <div className="col-xs-5 m-1"> */}
					{this.renderSelectedProgram(this.state.selectedProgram)}
				</div>
			</div>
		);
	}
}

export default Programs;

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
