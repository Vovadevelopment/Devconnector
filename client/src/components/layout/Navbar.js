import React from 'react';

const Navbar = () => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<i className="fas fa-code"></i>
				DevConnector
			</h1>
			<ul>
				<li><a href="profiles.html">Developers</a></li>
				<li>Register</li>
				<li>Login</li>
			</ul>
		</nav>
	)
};

export default  Navbar;
