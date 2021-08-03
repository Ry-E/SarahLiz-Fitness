import React from 'react';
import portrait from '../assets/images/portrait.jpeg';
import '../styles/home.css';

function Home() {
	return (
		<div className="home">
			<div className="home_content">
				<h1 className="headline">Expert Health & Fitness Coach</h1>
				<img
					className="portrait"
					src={portrait}
					alt="A friendly looking trainer"
				/>
				<h2 className="services">
					Online Health Coach &#9900; Personal Trainer &#9900; NPC
					Posing Coach
				</h2>
				<div className="info">
					<p>"We work on your fitness, diet, AND mindset."</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
