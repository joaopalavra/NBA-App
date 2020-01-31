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
			<h4 className="card-title">{team.abbreviation} - {team.full_name}</h4>
			<h6 className="card-title">Conference: {team.conference}</h6>
			<h6 className="card-title">Division: {team.division}</h6>
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
				<select className="selectpicker" data-width="fit">
    				<option data-content='<span className="flag-icon flag-icon-us"></span> English'>English</option>
  					<option  data-content='<span className="flag-icon flag-icon-mx"></span> Português'>Português</option>
				</select>
			</nav>
			<section className="jumbotron jumbotron-fluid text-center">
			<div className="img"></div>
			<div className="container py-5">
			<h1 className="display-4">NBA Teams</h1>
			
			</div>
			</section>
			<div className="py-5">
			<main className="container">
			<div className="text-right mb-3">
			
			</div>
			<div className="row">
			{teams.length > 0 ? allTeams : noTeams}
			</div>
			
			</main>
			</div>
			</>
			);

	}


}
export default Teams;