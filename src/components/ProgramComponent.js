import React, { Component } from 'react';
import { PROGRAMS } from '../shared/programs';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardText,
	CardBody,
	CardTitle,
} from 'reactstrap';

class Programs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProgram: null,
		};
	}

	onProgramSelect(program) {
		this.setState({ selectedProgram: program });
	}

	renderSelectedProgram(program) {
		if (program) {
			return (
				<Card>
					<CardImg top src={program.image} alt={program.name} />
					<CardBody>
						<CardTitle>{program.name}</CardTitle>
						<CardText>{program.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		return <div />;
	}

	render() {
		const program = this.props.programs.map(program => {
			return (
				<div key={program.id} className="col-md-5 m-1">
					<Card>
						<CardTitle>
							<CardBody>
								{program.name}
								<CardImg
									className=""
									width="100%"
									src={program.image}
									alt={program.name}
								/>
							</CardBody>
						</CardTitle>
					</Card>
					{/* <Card onClick={() => this.onProgramSelect(program)}>
                        <CardImg className='' width="100%" src={program.image} alt={program.name} />
                        <CardImgOverlay>
                            <CardTitle>{program.name}</CardTitle>
                        </CardImgOverlay>
                    </Card> */}
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">{program}</div>
				<div className="row">
					<div className="col-md-5 m-1">
						{this.renderSelectedProgram(this.state.selectedProgram)}
					</div>
				</div>
			</div>
		);
	}
}

export default Programs;
