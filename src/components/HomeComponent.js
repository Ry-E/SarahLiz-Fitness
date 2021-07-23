import React from 'react';
import portrait from '../assets/images/portrait.jpeg';
import '../styles/home.css';

function Home() {
	return (
		<div className="home">
			<div className="home_content">
				<h1 className="headline">
					Online Health Coach | Personal Trainer{'\n'}NPC Posing Coach
				</h1>
				<div className="portrait_container">
					<img
						className="portrait"
						src={portrait}
						alt="A friendly looking trainer"
					/>
				</div>
				<div className="info_container">
					<div className="info">
						<p>"We work on your fitness, diet, AND mindset."</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
