import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

var Navbar = React.createClass({
	render() {
		return (
			<div className='navContainer'>
				<div>
					Push me to the left!
				</div>
				<div>
					<ul className='navbar'>
						<li><Link className="navLinks" to="/artists"> Artists</Link></li> 
						<li><Link className="navLinks" to="/songs"> Songs</Link></li>
						<li><Link className="navLinks" to="/playlists"> Playlists</Link></li>
						<li><Link className="navLinks" to="/create"> Create a Playlist</Link></li>
					</ul>
				</div>
			</div>
		)
	}
});

// const Gbar = () => (
// 	<div>
// 		<h1>I'm a stateless component!</h1>
// 	</div>
// )

export default Navbar;