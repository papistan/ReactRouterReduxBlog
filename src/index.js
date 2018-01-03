import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
	render() { return <div>Hello!</div>}
};

class Goodbye extends React.Component {
	render() { return <div>Goodbye!</div>}
};


ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				<Route path="/" component={ PostIndex } />
				<Route path="/posts/:id" component={ PostsShow } />
				<Route path="/posts/new" component={ PostsNew } />
			</div>
		</Router>
 </Provider>
, document.getElementById('root'));

registerServiceWorker();

