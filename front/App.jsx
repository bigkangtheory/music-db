import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import Navbar from './components/Navbar.jsx';
import Artists from './components/Artists.jsx';
import Home from './components/Home.jsx';
import Songs from './components/Songs.jsx';
import Playlists from './components/Playlists.jsx';
import Create from './components/Create.jsx';
import PlaylistTracks from './components/PlaylistTracks.jsx';
import './styles/index.css';


const App = (props) => (
	<div>
		<Navbar />
		{props.children}
	</div>
	)

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRoute component={Home} />
			<Route path='/artists' component={Artists} />
			<Route path='/songs' component={Songs} />
			<Route path='/playlists' component={Playlists} />
			<Route path='/playlists/:id' component={PlaylistTracks} />
			<Route path='/create' component={Create} />
		</Route>
	</Router>,
	document.getElementById('app')
	)
