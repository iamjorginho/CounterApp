import React from 'react';
import ReactDOM from 'react-dom'; 
import CounterApp from './CounterApp';
import './style/index.css';


const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp  /> , divRoot);
