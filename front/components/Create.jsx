import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var Create = React.createClass({
	getInitialState() {
		return {playlists: null, title: null}
	},

	// componentDidMount() {
	// 	$.ajax({
	// 		url: '/api/playlists',
	// 		type: 'POST'
	// 	})
	// 	.done((data) => {
	// 		this.setState({playlists: data})
	// 	})
	// },

	handleChange(event) {
		event.preventDefault()
		this.setState({title: event.target.value})
		console.log(event.target.value)
	},

	getTitle() {
		var that = this
			$.ajax({
			url: '/api/playlists',
			type: 'POST',
			data: {title: that.state.title}
		})
	},

	render() {
		return (
			<div className='theBod'>
				<p>Create page</p>

				<form>
					<label>Playlist Title</label>
					<input onChange={this.handleChange} type='text'/>
					<button onClick={this.getTitle}>create</button>
				</form>
			</div>
		)
	}
});


export default Create;