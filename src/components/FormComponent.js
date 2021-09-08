import React from 'react';
import '../styles/form.css';

function Form() {
	return (
		<div className="application">
			<form action="/my-handling-form-page" method="post">
				<h1> Application </h1>
				<div>
					<label for="name">What's your name?</label>
					<input
						type="text"
						id="name"
						name="user_name"
						placeholder="Name"
						required
					></input>
				</div>

				<div>
					<label for="mail">Email:</label>
					<input
						type="email"
						id="mail"
						name="user_email"
						placeholder="E-mail"
						required
					></input>
				</div>

				<div>
					<label for="phone">Phone Number:</label>
					<input
						type="tel"
						id="phone"
						name="user_phone"
						placeholder="###-###-####"
					></input>
				</div>

				<div>
					<p>What program are you interested in?</p>

					<div id="programSelection">
						<div>
							<input
								type="radio"
								id="online_coaching"
								name="program"
								value="online_coaching"
								required
							/>
							<label for="program">Online Coaching</label>
						</div>

						<div>
							<input
								type="radio"
								id="personal_training"
								name="program"
								value="personal_training"
							/>
							<label for="program">Personal Training</label>
						</div>

						<div>
							<input
								type="radio"
								id="npc_bikini_posing"
								name="program"
								value="npc_bikini_posing"
							/>
							<label for="program">NPC Bikini Posing</label>
						</div>
					</div>
				</div>

				<div>
					<p id="goals">What are your goals?!</p>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal1"
							name="goal1"
							value="Fat Loss"
						></input>
						<label for="goal1">Fat Loss</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal2"
							name="goal2"
							value="Increase lean muscle Mass"
						></input>
						<label for="goal2">Increase lean muscle Mass</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal3"
							name="goal3"
							value="Build strength"
						></input>
						<label for="goal3">Build strength</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal4"
							name="goal4"
							value="Education"
						></input>
						<label for="goal4">Education</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal6"
							name="goal6"
							value="Lifestyle & mindset change"
						></input>
						<label for="goal5">Lifestyle & mindset change</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal6"
							name="goal6"
							value="Reverse diet"
						></input>
						<label for="goal6">Reverse diet</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal7"
							name="goal7"
							value="Find Balance"
						></input>
						<label for="goal7">Find balance</label>
					</div>
					<div className="goalInputs">
						<input
							type="checkbox"
							id="goal8"
							name="goal8"
							value="Other"
						></input>
						<label for="goal8">Other</label>
					</div>
				</div>
				<div>
					<label for="mainGoal">
						What is your #1 fitness/health goal you want to achieve
						by participating in this program?
					</label>
					<textarea
						id="mainGoal"
						name="mainGoal"
						placeholder="Answer here..."
						rows="4"
					></textarea>
				</div>
				<div>
					<label for="struggles">
						What do you currently struggle with? What do you want to
						change about your body, mindset, health, & lifestyle?
					</label>
					<textarea
						id="struggles"
						name="struggles"
						placeholder="Answer here..."
						rows="4"
					></textarea>
				</div>
				<div>
					<label for="preventedGoals">
						What has prevented you from achieving your goals in the
						past?
					</label>
					<textarea
						id="preventedGoals"
						name="preventedGoals"
						placeholder="Answer here..."
						rows="4"
					></textarea>
				</div>
				<div>
					<label for="reachedGoals">
						How would you feel if you reached your goals? How would
						your life be different? How happy would you be?
					</label>
					<textarea
						id="reachedGoals"
						name="reachedGoals"
						placeholder="Answer here..."
						rows="4"
					></textarea>
				</div>
				<div>
					<label for="importance" id="importance">
						How important is it to you to make your goals a reality?
						On a scale of 1-10 (1 = Barely important, 5 = Thinking
						about it, 10 = So ready to do this!)
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
					<p id="ready">
						Are you ready to invest in yourself in order to grow
						into the person you’ve always wanted to be?!
					</p>
					<div className="readyInputs">
						<div className="radios">
							<input
								type="radio"
								id="yes"
								name="ready"
								value="yes"
								checked
							></input>
							<label for="yes">Yes</label>
						</div>
						<div className="radios">
							<input
								type="radio"
								id="no"
								name="ready"
								value="no"
							></input>
							<label for="no">No</label>
						</div>
					</div>
				</div>
				<div>
					<input type="submit" value="submit" />
				</div>
			</form>
		</div>
	);
}

export default Form;
