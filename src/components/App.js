import React, { Component } from 'react';
import Sidebar from './containers/Sidebar';
import Editor from './presentational/Editor';
import Datastore from 'nedb';

let db;

export default class App extends Component {
	constructor(props) {
		super(props);
		db = new Datastore('codigo-notes.db');

		this.state = {
			notes: []
		}

		db.loadDatabase();

		this.clear();
		this.seed();

		db.find({}, (err, docs) => {
			console.log(docs)
			this.setState({notes: docs})
		})
	}
	seed(){
		db.insert([
			{
				content: 'hello world',
				created_at: 12312312,
				updated_at: 123123123,
			},
			{
				content: 'python notes',
				created_at: 913219912,
				updated_at: 123821123921
			},
		])
	}
	clear(){
		db.remove({}, { multi: true })
	}
	render() {
		return (
			<div>
				<Sidebar notes={this.state.notes} />
				<Editor content="asdasdas" />
			</div>
		);
	}
}