import React from 'react';
import ReactDOM from 'react-dom';
import Answer from '../src/components/Answer';

describe('renders Answer.js without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Answer />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})