import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/posts/new" component={ PostsNew } />
					<Route path="/posts/:id" component={ PostShow } />
					<Route path="/" component={ PostsIndex } />
				</Switch>
			</div>
		</BrowserRouter>
 </Provider>
, document.getElementById('root'));

registerServiceWorker();

