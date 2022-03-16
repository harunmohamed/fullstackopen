import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
    {id: 1, name: 'Harun Mohamed', number: '1234-1234-1234'},
    {id: 2, name: 'Thomas Shelby', number: '040-123456'},
    {id: 3, name: 'Harvey Specter', number: '444-444444'},
    {id: 4, name: 'James Bond', number: '222-222222'},
]

ReactDOM.render(<App/>, document.getElementById('root'))