import React,{ Component } from 'react';
import { showPost, deletePost } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostShow extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.showPost( id );
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/')
		});
	}

	
	render() {

		const { post } = this.props;

		if(!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<div>
					<Link className="btn btn-primary" to="/">Home</Link>
					<button 
						className="btn btn-danger pull-xs-right"
						onClick={this.onDeleteClick.bind(this)}
					>DELETE
					</button>
				</div>
				<div>
					<div>
						<h3>{post.title}</h3>
					</div>
					<div>
						<h6>Categories:{post.categories}</h6>
					</div>
					<div>
						<p>{post.content}</p>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ posts }, ownProps ){
	return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { showPost, deletePost })(PostShow)