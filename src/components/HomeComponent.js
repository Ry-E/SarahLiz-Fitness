import React, { useState } from 'react';
import portrait from '../assets/images/portrait_new.png';
import Programs from './ProgramComponent';
import Modal from './ModalComponent';
import Form from './FormComponent';
import '../styles/home.css';

function Home() {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(prev => !prev);
	};

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
							alt="Sarah with a big smile, looking ready to workout"
						/>
						<h2 className="services">
							Online Health Coach &#9900; Personal Trainer &#9900;
							NPC Posing Coach
						</h2>
						<button className="apply_button" onClick={toggleModal}>
							Start
						</button>
						<Modal onClose={toggleModal} modalOpen={modalOpen}>
							<Form />
						</Modal>
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
					<Programs toggleModal={toggleModal} />
				</div>
			</div>
		</div>
	);
}

export default Home;
