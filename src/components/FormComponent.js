import React from 'react';
import '../styles/form.css';

function Form() {
	let handleSubmit = event => {
		const form = document.getElementById('myForm');
		event.preventDefault();
		sendData();

		function sendData() {
			console.log('Attempting to send data');
			const XHR = new XMLHttpRequest();

			const FD = new FormData(form);

			XHR.addEventListener('load', function (event) {
				console.log(event.target.responseText);
			});

			XHR.addEventListener('error', function (event) {
				alert('Oops! Something went wrong.');
			});

			XHR.open('POST', 'http://localhost:3001');

			//Sending the user provided form data
			XHR.send(FD);

			console.log('Sent data');
		}
	};

	return (
		<div className="application">
			<form id="myForm" onSubmit={handleSubmit}>
				<h1> Application </h1>
				<section>
					<div>
						<label htmlFor="name">What's your name?</label>
						<input
							type="text"
							id="name"
							name="user_name"
							// required
							placeholder="Joe Shmoe"
						></input>
					</div>

					<div>
						<label htmlFor="mail">Email:</label>
						<input
							type="email"
							id="mail"
							name="user_email"
							placeholder="user@example.com"
							// required
						></input>
					</div>

					<div>
						<label htmlFor="phone">Phone Number:</label>
						<input
							type="tel"
							id="phone"
							name="user_phone"
							placeholder="###-###-####"
						></input>
					</div>
				</section>
				<section>
					<fieldset>
						<legend>What program are you interested in?</legend>
						<ul id="programSelection" role="list">
							<li>
								<input
									type="radio"
									id="online_coaching"
									name="program"
									value="online coaching"
									// required
								/>
								<label htmlFor="online_coaching">
									Online Coaching
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="personal_training"
									name="program"
									value="personal training"
								/>
								<label htmlFor="personal_training">
									Personal Training
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="npc_bikini_posing"
									name="program"
									value="npc bikini posing"
								/>
								<label htmlFor="npc_bikini_posing">
									NPC Bikini Posing
								</label>
							</li>
						</ul>
					</fieldset>
				</section>
				<section>
					<fieldset>
						<legend id="goals">What are your goals?!</legend>
						<ul className="goalsList" role="list">
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal1"
									name="goals"
									value="Fat Loss"
								></input>
								<label htmlFor="goal1">Fat Loss</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal2"
									name="goals"
									value="Increase lean muscle Mass"
								></input>
								<label htmlFor="goal2">
									Increase lean muscle Mass
								</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal3"
									name="goals"
									value="Build strength"
								></input>
								<label htmlFor="goal3">Build strength</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal4"
									name="goals"
									value="Education"
								></input>
								<label htmlFor="goal4">Education</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal6"
									name="goals"
									value="Lifestyle & mindset change"
								></input>
								<label htmlFor="goal5">
									Lifestyle & mindset change
								</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal6"
									name="goals"
									value="Reverse diet"
								></input>
								<label htmlFor="goal6">Reverse diet</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal7"
									name="goals"
									value="Find Balance"
								></input>
								<label htmlFor="goal7">Find balance</label>
							</li>
							<li className="goalInputs">
								<input
									type="checkbox"
									id="goal8"
									name="goals"
									value="Other"
								></input>
								<label htmlFor="goal8">Other</label>
							</li>
						</ul>
					</fieldset>
				</section>
				<section>
					<div>
						<label htmlFor="mainGoal">
							What is your #1 fitness/health goal you want to
							achieve by participating in this program?
						</label>
						<textarea
							id="mainGoal"
							name="mainGoal"
							placeholder="Answer here..."
							rows="4"
						></textarea>
					</div>
					<div>
						<label htmlFor="struggles">
							What do you currently struggle with? What do you
							want to change about your body, mindset, health, &
							lifestyle?
						</label>
						<textarea
							id="struggles"
							name="struggles"
							placeholder="Answer here..."
							rows="4"
						></textarea>
					</div>
					<div>
						<label htmlFor="preventedGoals">
							What has prevented you from achieving your goals in
							the past?
						</label>
						<textarea
							id="preventedGoals"
							name="preventedGoals"
							placeholder="Answer here..."
							rows="4"
						></textarea>
					</div>
					<div>
						<label htmlFor="reachedGoals">
							How would you feel if you reached your goals? How
							would your life be different? How happy would you
							be?
						</label>
						<textarea
							id="reachedGoals"
							name="reachedGoals"
							placeholder="Answer here..."
							rows="4"
						></textarea>
					</div>
				</section>
				<section>
					<div>
						<label htmlFor="importance" id="importance">
							How important is it to you to make your goals a
							reality? On a scale of 1-10 (1 = Barely important, 5
							= Thinking about it, 10 = So ready to do this!)
						</label>
						<input
							type="number"
							id="importance"
							name="importance"
							min="1"
							max="10"
							placeholder="10"
						></input>
					</div>
					<div>
						<fieldset>
							<legend id="ready">
								Are you ready to invest in yourself in order to
								grow into the person you’ve always wanted to
								be?!
							</legend>
							<ul className="readyInputs" role="list">
								<li className="radios">
									<input
										type="radio"
										id="yes"
										name="ready"
										value="yes"
										defaultChecked
									></input>
									<label htmlFor="yes">Yes</label>
								</li>
								<li className="radios">
									<input
										type="radio"
										id="no"
										name="ready"
										value="no"
									></input>
									<label htmlFor="no">No</label>
								</li>
							</ul>
						</fieldset>
					</div>
				</section>
				<section>
					<div>
						<input type="submit" value="submit" />
					</div>
				</section>
			</form>
		</div>
	);
}

export default Form;
