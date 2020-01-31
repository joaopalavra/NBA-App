import React from "react";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";
import { Pagination } from 'semantic-ui-react'


class Players extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			players: [],
			currentPageNumber: 1,
			totalPages: 1,
            itemsPerPage: 30
		};
		this.handlePage = this.handlePage.bind(this)
	}

	async componentDidMount() {
		const url = "https://free-nba.p.rapidapi.com/players?page="+this.state.currentPageNumber+"&per_page=30";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		data.data.sort((a,b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0));
		this.setState({
						players: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	async handlePage (e, {activePage}) {
		let gotopage = { activePage }
		let pagenum = gotopage.activePage
		let pagestring = pagenum.toString()
		const url = "https://free-nba.p.rapidapi.com/players?page="+pagestring+"&per_page=30";
		const response = await fetch(url, {
			"method": "GET",
			"headers": new Headers({
				"x-rapidapi-host": "free-nba.p.rapidapi.com",
				"x-rapidapi-key": "6892d4ffdemshdb9d8e292b4d399p1f7536jsn73596096465e"
			})
		});
		const data = await response.json();
		data.data.sort((a,b) => (a.last_name > b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0));
		this.setState({
						players: data.data,
						currentPageNumber: data.meta.current_page,
						totalPages: data.meta.total_pages,
						itemsPerPage: data.meta.per_page,
						});
	}

	render() {
		const { players } = this.state;
		const allPlayers = players.map((player, index) => (
	      <div key={index} className="col-md-6 col-lg-4">
	        <div className="card mb-4">
	          <div className="card-body">
	            <h5 className="card-title">{player.last_name+", "+player.first_name}</h5>
	            <h6 className="card-title">Position: {player.position}</h6>
	            <h6 className="card-title">Team: {player.team.full_name}</h6>
	          </div>
	        </div>
	      </div>
	    ));

	    const noPlayers = (
				<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
				<h4>
				No players yet. 
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
    					<Link to="/players" className="nav-link active">
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
			<h1 className="display-4">NBA Players</h1>
			
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
			{players.length > 0 ? allPlayers : noPlayers}
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
export default Players;