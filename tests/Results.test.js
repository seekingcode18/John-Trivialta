import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../src/components/Results';

describe('renders without crashing', () => {
    it('smoke test', () => {
        let simData = {score: 1};
        const div = document.createElement('div');
        ReactDOM.render(<Results score={simData.score} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})