import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

	renderField(field) {
		const { meta: { touched, error }} = field;

		const className = `form-group ${touched && error ? 'has-danger' : ''}`;


		return (
			<div className={className}> 
				<label>{field.label}</label>
				<input
				className="form-control"
				type="text"
				{...field.input}
				/>
				<div className="text-danger">
					{touched ? error : ''}
				</div>
			</div>
			
		)
	}

	onSubmit(values) {

		this.props.createPost(values, () => { this.props.history.push('/') 
		});
		// this.postNew(values)
	}

	render() {
		
		const { handleSubmit } = this.props;

		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
})(
		connect(null,{ createPost })(PostsNew)
);