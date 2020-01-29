import React from "react";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";

class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: []
		};
	}

	async componentDidMount() {
		const url = "https://free-nba.p.rapidapi.com/teams";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		this.setState({teams: data.data});
	}

	render() {
		const { teams } = this.state;
		const allTeams = teams.map((team, index) => (
			<div key={index} className="col-md-6 col-lg-4">
			<div className="card mb-4">
			<div className="card-body">
			<h5 className="card-title">{team.full_name}</h5>
			<Link to={"/teams/${team.id}"} className="btn custom-button">
			View Team
			</Link>
			</div>
			</div>
			</div>
			));

		const noTeams = (
			<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
			<h4>
			No teams yet. 
			</h4>
			</div>
			);

		return (
			<>
			<nav className="navbar navbar-light bg-light">
    			<ul className="nav nav-tabs">
	    			<Link to="/" >
						<img src={logo} width="90" height="30" hspace="10" className="">
						</img>
					</Link>
  					<li className="nav-item">
  						<Link to="/teams" className="nav-link active">
  						Teams
  						</Link>
  					</li>
  					<li className="nav-item">
    					<Link to="/players" className="nav-link">
  						Players
  						</Link>
  					</li>
  					<li className="nav-item">
    					<Link to="/games" className="nav-link">
  						Games
  						</Link>
 	 				</li>
				</ul>
			</nav>
			<section className="jumbotron jumbotron-fluid text-center">
			<div className="container py-5">
			<h1 className="display-4">NBA Teams</h1>
			<p className="lead text-muted">
			We’ve pulled together our most popular recipes, our latest
			additions, and our editor’s picks, so there’s sure to be something
			tempting for you to try.
			</p>
			</div>
			</section>
			<div className="py-5">
			<main className="container">
			<div className="text-right mb-3">
			
			</div>
			<div className="row">
			{teams.length > 0 ? allTeams : noTeams}
			</div>
			<Link to="/" className="btn btn-link">
			Home
			</Link>
			</main>
			</div>
			</>
			);

	}


}
export default Teams;