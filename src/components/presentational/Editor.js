import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import EditorDisplay from './EditorDisplay';

import 'brace/mode/markdown';
import 'brace/theme/github';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorText: ''
		}
	}
	onChange(newValue) {
		this.setState({ editorText: newValue })
	}
	render() {
		return (
			<div>
				<h1>Editor</h1>
				<AceEditor
					mode="markdown"
					theme="github"
					value={this.state.editorText}
					onChange={this.onChange.bind(this)}
					highlightActiveLine={true}
					showGutter={false}
					setOptions={
						{showLineNumbers: false}
					}
					height="100px"
				/>
				<EditorDisplay content={this.state.editorText} />
			</div>
		);
	}
}