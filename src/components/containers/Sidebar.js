import React, { Component } from 'react';
import NoteList from '../presentational/NoteList';

export default class Sidebar extends Component {
	selectNote(note){
		console.log(note)
	}
	render() {
		return (
			<div>
				<h1>Sidebar</h1>
				<NoteList notes={this.props.notes} selectNote={this.selectNote} />
			</div>
		);
	}
}