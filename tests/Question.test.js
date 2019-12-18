import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../src/components/Question';

describe('renders without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Question />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})