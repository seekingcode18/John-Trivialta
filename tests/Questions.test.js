import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';

describe('renders without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Questions />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})