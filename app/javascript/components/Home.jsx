import React from "react";
import { Link } from "react-router-dom";





export default () => (

  

	<div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
		<div className="jumbotron jumbotron-fluid bg-transparent">
		<div className="img"></div>
			<div className="container secondary-color">
				<h1 className="display-4">NBA App</h1>
				<p className="lead">
				An informative app of the National Basketball Association.
				</p>
				<hr className="my-4" />
					<Link to="/teams" className="btn btn-lg custom-button" role="button">
						View Teams
					</Link>
					<p></p>
					<Link to="/players" className="btn btn-lg custom-button" role="button">
						View Players
					</Link>
					<p></p>
					<Link to="/games" className="btn btn-lg custom-button" role="button">
						View Games
					</Link>
			</div>
		</div>
	</div>


);