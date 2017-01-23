/**
 * Created by lendvaib on 19/01/17.
 */


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyB9eLuej5zjcHwZxTu8kDuJzGC8HblQ1-k',
			authDomain: 'manager-18db4.firebaseapp.com',
			databaseURL: 'https://manager-18db4.firebaseio.com',
			storageBucket: 'manager-18db4.appspot.com',
			messagingSenderId: '845928226075'
		};

		firebase.initializeApp(config);
	}


	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
