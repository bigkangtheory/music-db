import React from 'react';
import $ from 'jquery';

var Songs = React.createClass({
	getInitialState() {
		return {songs: []}
	},

	componentDidMount() {
		$.ajax({
			url: '/api/songs',
			type: 'GET'
		})
		.done((data) => {
			this.setState({songs: data})
		})
	},

	render() {
		return (
			<div  className='theBod'>
				<h2 className="header">Songs</h2>
					<ol>
						{this.state.songs === 0 ? null : this.state.songs.map((val, idx) => {

							let songtitle = val.title
							let artist = val.artist ? val.artist.name : 'n/a'
							let youtube_url = val.youtube_url ? val.youtube_url : 'n/a'

							return ( 
								<li key={idx}> {songtitle} "by" {artist}

								<ul>

								<iframe id="ytplayer" type="text/html" width="640" height="360"
								src={`${youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
								</ul>
								</li>
							)

						})}

					</ol>
			</div>
		)
	}
});

// Displays all of your songs. Each song should have a title, artist, and youtube embed. You can create a song by using the following iFrame embed in your jsx. You will need to change the 'localhost:9999' part of the src string to match whatever port you're using to host your app:


export default Songs;