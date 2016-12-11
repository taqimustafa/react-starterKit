import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
						</button>
						<a className="navbar-brand">
							Logo
						</a>
					</div>
					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-left">
							<i className="fa fa-search"></i><input type="text" className="form-control searchbox" placeholder="Search" />
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a>
									<i className="fa fa-bars"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
    );
  }
}
