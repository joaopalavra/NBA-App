import React from "react";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";
import { Pagination } from 'semantic-ui-react'

class Game extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			game: [],
			teams: []			
		};
	}

	async componentDidMount() {
		const {
      		match: {
        	params: { id }
      		}
		} = this.props;
		const url = `https://free-nba.p.rapidapi.com/games/${id}`;
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		data.home_team["team_score"] = (data.home_team_score);
		data.visitor_team["team_score"] = (data.visitor_team_score);
		//console.log(data);
		const t = [];
		t.push(data.home_team);
		t.push(data.visitor_team);
		//console.log(t);
		this.setState({game: data,
						teams: t});
		//console.log(this.state.teams[0]);
	}

	addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
	}

	render() {
		const { teams } = this.state;
		const allTeams = teams.map((team, index) => (
			<div key={index} className="col-md-6 col-lg-4">
				<div className="card mb-4">
					<div className="card-body">
						<h4 className="card-title">{team.full_name} - {team.team_score}</h4>
						<h6 className="card-title">Division: {team.division}</h6>
						<Link to={`/games/team/${team.id}`} className="btn custom-button">
							View Team Games
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
  						<Link to="/teams" className="nav-link">
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
			<div className="img"></div>
			<div className="container py-5">
			<h1 className="display-4">Game Details</h1>
			
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

export default Game;

