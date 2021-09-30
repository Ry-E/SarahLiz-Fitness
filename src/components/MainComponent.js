import React from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route } from 'react-router-dom';
import ProgramView from './ProgramViewComponent';
import '../styles/main.css';
// import ProgramView from './ProgramViewComponent';

function Main() {
	return (
		<main className="main">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/programview">
					<ProgramView />
				</Route>
			</Switch>
		</main>
	);
}

export default Main;
