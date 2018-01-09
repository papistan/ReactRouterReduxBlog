import React,{ Component } from 'react';
import { showPost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostShow extends Component {

	componentDidMount() {
		const { id } = this.props.match.params.id;

		this.props.showPost( id )
	}


	
	render() {
		return (
			<div>
				<div>
					<Link className="btn btn-primary" to="/">Home
					</Link>
				</div>
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
			</div>
		)
	}
}

function mapStateToProps({ posts }, ownProps ){
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { showPost })(PostShow)