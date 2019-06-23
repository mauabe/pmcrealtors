import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';


class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="home">
				<Header />
				<img src="/img/logo.png" />
				<h1>PMC Realtors</h1>
					<section >
						<Filter />
						<Listings />
						<ul>
							<li>
								<a href="https://www.pmcrealtors.com" target="new">
									pmcrealtors.com
								</a>
							</li>
						</ul>
					</section>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
