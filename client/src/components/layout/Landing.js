import React from 'react';
import '../../App.css';

const Landing = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="x-large">Developer Connector</h1>
					<p className="lead">
						Create a developer profile/portfolio, share posts and get help from
						other developers
					</p>
					<div className="buttons">
						<button className="btn btn-primary">Sign Up</button>
						<button className="btn btn-light">Login</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
