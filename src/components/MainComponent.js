import React, { useState } from 'react';
import Home from './HomeComponent';
import Programs from './ProgramComponent';
import About from './AboutComponent';
import { PROGRAMS } from '../shared/programs';
import { Switch, Route } from 'react-router-dom';

function Main() {
	const [programs, setPrograms] = useState(PROGRAMS);

	return (
		<div className="main">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/programs">
					<Programs programs={programs} />
				</Route>
			</Switch>
		</div>
	);
}

export default Main;
