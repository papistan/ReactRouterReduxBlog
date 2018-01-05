import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

	renderField(field) {
		return (
			<div className="form-group"> 
				<label>{field.label}</label>
				<input
				className="form-control"
				type="text"
				{...field.input}
				/>
			</div>
		)
	}

	onSubmit(values) {
		console.log(values)
		// this.postNew(values)
	}

	render() {
		
		return (
			<div>
				<form>
					<Field 
						label="Title"
						name="title"
						component={this.renderField}
					/>
					<Field 
						label="Categories"
						name="categories"
						component={this.renderField}
					/>
					<Field 
						label="Post Content"
						name="content"
						component={this.renderField}
					/>
				</form>
				<Link className="btn btn-danger" to="/">
					CANCEL
				</Link>
			</div>
		)
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);