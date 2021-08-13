import React, { useState } from 'react';
import portrait from '../assets/images/portrait_new.png';
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
				<div className="program_container">
					<h1 className="program_heading">What we can do</h1>
					<p className="program_info">
						I use a holistic approach to help reach your goals,
						being that health uses 3 pillars. We work on your
						fitness, diet, AND mindset. You need all 3 to be
						successful in reaching your goals.
					</p>
					<Programs programs={programs} />
				</div>
			</div>
		</div>
	);
}

export default Home;
