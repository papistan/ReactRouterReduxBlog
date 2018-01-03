import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostsIndex from './components/PostsIndex';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				<Route path="/" component={ PostsIndex } />
				<Route path="/posts/:id" component={ PostsIndex } />
				<Route path="/posts/new" component={ PostsIndex } />
			</div>
		</Router>
 </Provider>
, document.getElementById('root'));

registerServiceWorker();

