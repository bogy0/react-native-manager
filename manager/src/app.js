/**
 * Created by lendvaib on 19/01/17.
 */


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
