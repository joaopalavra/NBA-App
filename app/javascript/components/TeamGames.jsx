import React from "react";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";
import { Pagination } from 'semantic-ui-react'

class TeamGames extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			games: [],
			currentPageNumber: 1,
			totalPages: 1,
            itemsPerPage: 100
		};
		this.handlePage = this.handlePage.bind(this)
	}

	async componentDidMount() {
		const path = this.props.location.pathname.split("/");
		const index = path[3];

		const url = "https://free-nba.p.rapidapi.com/games?page="+this.state.currentPageNumber+"&team_ids="+index+"&per_page=100";
		console.log(url);
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();

		
		data.data.sort((a,b) => a.date-b.date);

		this.setState({
						games: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	async handlePage (e, {activePage}) {
		const path = this.props.location.pathname.split("/");
		const index = path[3];
		let gotopage = { activePage }
		let pagenum = gotopage.activePage
		let pagestring = pagenum.toString()
		const url = "https://free-nba.p.rapidapi.com/games?page="+pagestring+"&team_ids="+index+"&per_page=100";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		data.data.sort((a,b) => a.date-b.date);
		this.setState({
						games: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	render() {
		const { games } = this.state;
		const allGames = games.map((game, index) => (
	      <div key={index} className="col-md-6 col-lg-4">
	        <div className="card mb-4">
	          <div className="card-body">
	            <h5 className="card-title">{game.home_team.name+" VS "+game.visitor_team.name}</h5>
	            <Link to={`/games/${game.id}`} className="btn custom-button">
	              View Game Details
	            </Link>
	          </div>
	        </div>
	      </div>
	    ));

	    const noGames = (
			<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
				<h4>
					No games yet. 
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
			<h1 className="display-4">NBA Games</h1>
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
export default TeamGames;
