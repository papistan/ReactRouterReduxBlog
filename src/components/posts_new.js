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
				{field.meta.error}
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
					<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/">
					CANCEL
				</Link>
				</form>
			</div>
		)
	}
}

function validate(values){
	const errors = {};

	if(!values.title || values.title.length < 3) {
		errors.title = "Please add title with 3 characters or longer"
	}

	if(!values.categories) {
		errors.categories = "Please add categories"
	}

	if(!values.content) {
		errors.content = "Please add content"
	}

	return errors
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);