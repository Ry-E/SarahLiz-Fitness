import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent';
import Footer from './components/FooterComponent';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;
