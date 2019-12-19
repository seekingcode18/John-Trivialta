import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';
import Enzyme, { shallow } from 'enzyme';

describe('renders Questions without crashing', () => {
    it('smoke test', () => {
        const simulatedData = {difficulty: 'easy', category: 9};
        const div = document.createElement('div');
        ReactDOM.render(<Questions properties={simulatedData} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders Results when incrementor in state = 10', () => {
        const simulatedData = {difficulty: 'easy', category: 9};
        const wrapper = shallow(<Questions properties={simulatedData} />);
        wrapper.setState({incrementor: 10});
        expect(wrapper.find('Results')).toHaveLength(1);
    })
})
