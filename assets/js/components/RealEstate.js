import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
				<img src="/img/logo.png" />
				<h1>PMC Realtors</h1>
					<div className="menu">
						<ul>
							<li>
								<a href="https://www.pmcrealtors.com" target="new">
									pmcrealtors.com
								</a>
							</li>
						</ul>
					</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
