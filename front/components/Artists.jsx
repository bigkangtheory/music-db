import React from 'react';
import $ from 'jquery';

var Artists = React.createClass({
	getInitialState() {
		return {artists: []}
	},
	componentDidMount() {
		$.ajax({
			url: '/api/artists',
			type: 'GET'
		})
		.done((data) => {
			this.setState({artists: data})
		})
	},
	render() {
		return (
			<div className='theBod'>
				<h2 className="header">Artists:</h2>
				<ol>
					{this.state.artists === 0 ? null : this.state.artists.map((val, idx) => {
						return <li key={idx}> {val.name} </li>
					})}
				</ol>
			</div>
		)
	}
});

export default Artists;
