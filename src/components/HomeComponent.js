import React from 'react';
import portrait from '../assets/images/portrait.jpeg';
import '../styles/home.css';

function Home() {
	return (
		<div className="home">
			<div className="portrait_container">
				<img
					className="portrait"
					src={portrait}
					alt="A friendly looking trainer"
				/>
			</div>
			<div className="info_container">
				<h1 className="headline">
					Online Health Coach | Personal Trainer | NPC Posing Coach
				</h1>
				<ul className="list">
					<li>
						B.S. Michigan State University: Kinesiology,
						Specialization- Exercise Science, Cognates- Fitness
						Leadership & Health Promotion
					</li>
					<li>
						ACSM CPT: American College Sports Medicine Certified
						Personal Trainer
					</li>
					<li>
						IFBBPro: International Federation of Bodybuilding
						Professional Bikini Competitor
					</li>
					<li className="experience">Experience: 9+ yrs</li>
				</ul>
			</div>
		</div>
	);
}

export default Home;
