import React from 'react';
import ReactDOM from 'react-dom';
import SetUp from '../src/components/SetUp';

describe('renders Setup without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SetUp />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})