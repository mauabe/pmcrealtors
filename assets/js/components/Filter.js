import React, { Component } from 'react';

class Filter extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	render() {
		return (
			<div >
				<section className="filter" >
					Filter
				</section>
			</div>
		);
	}
}

export default Filter;
