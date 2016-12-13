import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

var Playlists = React.createClass({

	getInitialState() {
			return {playlists: []}
		},

		componentDidMount() {
			$.ajax({
				url: '/api/playlists',
				type: 'GET'
			})
			.done((data) => {
				this.setState({playlists: data})
			})
		},

		render() {
			return (
				<div className='theBod'>
					<h2 className="header">Playlists:</h2>
					<ol>
						{this.state.playlists === 0 ? null : this.state.playlists.map((val, idx) => {
							return <li key={idx}> <Link to={'/playlists/' + val.id}> {val.title} </Link></li>
						})}
					</ol>
				</div>
			)
		}
});

//link to '/playlists/+ whatever'
//this.params

export default Playlists;