import React, { Component } from 'react';
// import logo from '../../img/logo.png';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

  render() {
		return (
			<header>
        <div className="logo">
					<img src="img/logo.png" width="70" height="70" alt="logo"/>
				</div>
				<div className="pmc-realtors">PMC Realtors</div>
        <nav>
          <a href="/">Create Ads</a>
          <a href="/">PMC Realtors Team</a>
          <a href="/">Log in</a>
          <a href="/" className="register-btn">Register</a>
        </nav>
			</header>
		);
	}
}

export default Header;