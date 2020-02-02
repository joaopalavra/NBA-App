import React, { Component, Suspense }  from "react";
import { withTranslation } from "react-i18next";
import logo from '../../assets/images/nba_PNG6.png';
import { Link } from "react-router-dom";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { t, i18n  } = this.props;

		const changeLanguage = lng => {
    		i18n.changeLanguage(lng);
  		};

  	return (
  		<>
  		<nav className="navbar navbar-light bg-light">
    			<ul className="nav nav-tabs">
	    			<Link to="/" >
						<img src={logo} width="90" height="30" hspace="10" className="">
						</img>
					</Link>
  					
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
  		<div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
			<div className="jumbotron jumbotron-fluid bg-transparent">
				<div className="img"></div>
					<div className="container secondary-color">
						<h1 className="display-4">NBA App</h1>
						<p className="lead">
							{t("An informative app of the National Basketball Association.")}
						</p>
						<hr className="my-4" />
						<Link to="/teams" className="btn btn-lg custom-button" role="button">
							{t("View Teams")}
						</Link>
						<p></p>
						<Link to="/players" className="btn btn-lg custom-button" role="button">
							{t("View Players")}
						</Link>
						<p></p>
						<Link to="/games" className="btn btn-lg custom-button" role="button">
							{t("View Games")}
						</Link>
				</div>
			</div>
		</div>
		</>
		);

	}
}
const MyComponent = withTranslation()(Home)
export default function App() {
	
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
