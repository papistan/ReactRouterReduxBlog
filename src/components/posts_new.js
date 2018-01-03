import React, { Component } from 'react';

class PostsNew extends Component {
	

	render() {
		
		return (
			<div>
				<form action="http://reduxblog.herokuapp.com/api/posts?key=555" method="post">
					Title: <br/>
					<input type="text" name="title" />
					<br/>
					Category: <br/>
					<input type="text" name="categories"/>
					<br/>
					Contents: <br/>
					<textarea type="textarea" name="content"/>
					<br/>
					<input type="submit" value="Submit"/>
				</form>

			</div>
		)
	}
}

export default PostsNew;