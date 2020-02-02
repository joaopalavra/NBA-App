import React, { Component, Suspense }  from "react";
import { withTranslation } from "react-i18next";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";


class Teams extends React.Component {
	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
			teams: []
		};
	}

	async componentDidMount() {
		this._isMounted = true;
		const url = "https://free-nba.p.rapidapi.com/teams";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		this._isMounted && this.setState({teams: data.data});
	}

	componentWillUnmount(){
		this._isMounted = false;
	}



	render() {
		const { t, i18n  } = this.props;

		const changeLanguage = lng => {
    		i18n.changeLanguage(lng);
  		};
		const { teams } = this.state;
		const allTeams = teams.map((team, index) => (
			<div key={index} className="col-md-6 col-lg-4">
			<div className="card mb-4">
			<div className="card-body">
			<h4 className="card-title">{team.abbreviation} - {team.full_name}</h4>
			<h6 className="card-title">{t("Conference")}: {t(team.conference)}</h6>
			<h6 className="card-title">{t("Division")}: {t(team.division)}</h6>
			</div>
			</div>
			</div>
			));

		const noTeams = (
			<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
			<h4>
			{t("No teams yet.")}
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
  						{t("Teams")}
  						</Link>
  					</li>
  					<li className="nav-item">
    					<Link to="/players" className="nav-link">
  						{t("Players")}
  						</Link>
  					</li>
  					<li className="nav-item">
    					<Link to="/games" className="nav-link">
  						{t("Games")}
  						</Link>
 	 				</li>
				</ul>
				
				<div className="dropdown">
				  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    {t("Language")}
				  </button>
				  <div className="dropdown-menu">
				    <a className="dropdown-item" onClick={() => changeLanguage("en")}>English</a>
				    <a className="dropdown-item" onClick={() => changeLanguage("pt")}>Português</a>
				  </div>
				</div>
			</nav>
			<section className="jumbotron jumbotron-fluid text-center">
			<div className="img"></div>
			<div className="container py-5">
			<h1 className="display-4">{t("NBA Teams")}</h1>
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
const MyComponent = withTranslation()(Teams)
export default function App() {
	
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}