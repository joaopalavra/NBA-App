import React, { Component, Suspense }  from "react";
import { withTranslation } from "react-i18next";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";
import { Pagination } from 'semantic-ui-react'

class TeamGames extends React.Component {
	constructor(props) {
		super(props);
		this._isMounted = false;
		this.state = {
			games: [],
			currentPageNumber: 1,
			totalPages: 1,
            itemsPerPage: 100
		};
		this.handlePage = this.handlePage.bind(this)
	}

	async componentDidMount() {
		this._isMounted = true;
		const id = (window.location.href).split("/");
		const url = "https://free-nba.p.rapidapi.com/games?page="+this.state.currentPageNumber+"&team_ids="+id[id.length-1]+"&per_page=100";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();

		
		data.data.sort((a,b) => a.date-b.date);

		this._isMounted && this.setState({
						games: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	async handlePage (e, {activePage}) {
		this._isMounted = true;
		const id = (window.location.href).split("/");
		let gotopage = { activePage }
		let pagenum = gotopage.activePage
		let pagestring = pagenum.toString()
		const url = "https://free-nba.p.rapidapi.com/games?page="+pagestring+"&team_ids="+id[id.length-1]+"&per_page=100";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		data.data.sort((a,b) => a.date-b.date);
		this._isMounted && this.setState({
						games: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	componentWillUnmount(){
		this._isMounted = false;
	}

	render() {
		const { t, i18n  } = this.props;

		const changeLanguage = lng => {
    		i18n.changeLanguage(lng);
  		};
		const { games } = this.state;
		const allGames = games.map((game, index) => (
	      <div key={index} className="col-md-6 col-lg-4">
	        <div className="card mb-4">
	          <div className="card-body">
	            <h5 className="card-title">{game.home_team.name+" - "+game.home_team_score+" VS "+game.visitor_team.name+" - "+game.visitor_team_score}</h5>
	            <Link to={`/games/${game.id}`} className="btn custom-button">
	              {t("View Game Details")}
	            </Link>
	          </div>
	        </div>
	      </div>
	    ));

	    const noGames = (
			<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
				<h4>
					{t("No games yet.")}
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
			<h1 className="display-4">{t("Team Games")}</h1>
			
			</div>
			</section>
			<div className="py-5">
			<main className="container">
			<div className="text-right mb-3">
			<Pagination className="digg_pagination" onPageChange={this.handlePage} size='mini' siblingRange='10'
			 defaultActivePage={this.state.currentPageNumber}
			 totalPages={this.state.totalPages} />
			</div>
			<div className="row">
			{games.length > 0 ? allGames : noGames}
			</div>

			<Pagination className="digg_pagination" onPageChange={this.handlePage} size='mini' siblingRange='10'
			 defaultActivePage={this.state.currentPageNumber}
			 totalPages={this.state.totalPages} />
			</main>
			</div>
			</>
			);

	}

}
const MyComponent = withTranslation()(TeamGames)
export default function App() {
	
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
