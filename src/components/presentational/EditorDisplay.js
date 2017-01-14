import React, { Component } from 'react';
import marked from 'marked';

export default class EditorDisplay extends Component {
	render() {
		return (
			<div>
				<h1>Display</h1>
				<div className="markdown-body">
					<div dangerouslySetInnerHTML={ {__html: marked(this.props.content) }}></div>
				</div>
			</div>
		);
	}
}