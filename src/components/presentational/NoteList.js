import React, { Component } from 'react';
import NoteListItem from './NoteListItem';

export default class NoteList extends Component {
	render() {
		return (
			<div>
				{this.props.notes.length === 0 ? (
					'loading'
				) : (
					<ul>
						{this.props.notes.map((note) => {
							return(
								<NoteListItem key={note._id} note={note} onClick={() => this.props.selectNote(note)} />
							)
						})}
					</ul>
				)}
			</div>
		);
	}
}