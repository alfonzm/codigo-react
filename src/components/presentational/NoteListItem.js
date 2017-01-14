import React, { Component } from 'react';

export default class NoteListItem extends Component {
	render() {
		return (
			<li onClick={this.props.onClick}>
				{ this.props.note.content }
			</li>
		);
	}
}