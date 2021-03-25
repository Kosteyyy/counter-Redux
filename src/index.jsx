import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const HelloWorld = () => (
	<div>Hello World!</div>
);

ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));