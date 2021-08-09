import React, { useState } from 'react';
import portrait from '../assets/images/portrait.jpeg';
import Programs from './ProgramComponent';
import { PROGRAMS } from '../shared/programs';
import '../styles/home.css';

function Home() {
	const [programs, setPrograms] = useState(PROGRAMS);
	return (
		<div className="home">
			<div className="home_content">
				<div className="home_landing">
					<div className="landing_content">
						<h1 className="headline">
							Expert Health & Fitness Coach
						</h1>
						<img
							className="portrait"
							src={portrait}
							alt="A friendly looking trainer"
						/>
						<h2 className="services">
							Online Health Coach &#9900; Personal Trainer &#9900;
							NPC Posing Coach
						</h2>
						<button className="apply_button">Start</button>
					</div>
				</div>
				<Programs programs={programs} />
			</div>
		</div>
	);
}

export default Home;
