import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';

describe('renders without creashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})