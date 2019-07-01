import React from "react";
import Logo from "../Images/logo.png";
class NavBar extends React.Component {
  render() {
    return (
		<nav className = "navbar navbar-expand">
			<div className="container-fluid">
				<div className="navbar-header">
					<img src={Logo} alt="D&D" class=".img-thumbnail .img-responsive .img-fluid" height="42" width="42"/> 
					<span id="after-logo">Character Creator</span>
				</div>
			</div>
		</nav>
    );
  }
}
export default NavBar;