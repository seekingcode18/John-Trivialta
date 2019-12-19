import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../src/components/Results';
import Enzyme, { shallow } from 'enzyme';

describe('renders Results.js without crashing', () => {
    // needs a score to render. makes dummy data to check if the score is there in order for the results with a div inside to render
    it('smoke test', () => {
        let simData = {score: 1};
        const div = document.createElement('div');
        ReactDOM.render(<Results score={simData.score} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // sets a dummy data score. checks if we can find within a p tag the dummy data score
    it('renders the CORRECT score', () => {
        let simData = {score: 827234};
        const wrapper = shallow (<Results score={simData.score} />);
        expect(wrapper.find('p').text()).toEqual('Your score is: 827234 / 10');
    })
})