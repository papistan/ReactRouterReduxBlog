import React,{ Component } from 'react';

class PostShow extends Component {

	componentDidMount() {
		this.props.fetchPost()
	}
	
	render() {
		return (
			

			<div>
				<div>
					{this.props.post.title}
				</div>
				<div>
					Categories: {this.props.post.categories}
				</div>
				<div>
					{this.props.post.content}
				</div>
			</div>

		)
	}
}