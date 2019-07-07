import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import '../../scss/styles.scss';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div className="home">
				<Header />
				<img src="/img/logo.png" />
				<h1>PMC Realtors</h1>
				<section id="content-a   ">
					<Filter />
					<Listings />
						<a href="https://www.pmcrealtors.com" target="new">pmcrealtors.com</a>
				</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
