import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers';

const Counter = ({ counter, decrease, increase }) => {

	return (
		<div className="counter">
			<button onClick={decrease}>-</button>
			{counter}
			<button onClick={increase}>+</button>
		</div>)
}

function Application(props) {
	const increase = () => {
		props.dispatch({
			type: "INC"
		})
	};
	const decrease = () => {
		props.dispatch({
			type: "DEC"
		})
	}
	return (
		<div className="container">
			<div>Hello World! This is Counter</div>
			<Counter counter={props.counter} decrease={decrease} increase={increase}/>
		</div>
	)
}

function mapStateToProps(state) {
	return {
		counter: state.counter
	}
}

export default connect(mapStateToProps) (Application);