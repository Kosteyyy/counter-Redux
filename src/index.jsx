import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers';
import Application from "./App.jsx";

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<Application/>
	</Provider>,
	document.querySelector('#root')
);