import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';
import Enzyme, { shallow } from 'enzyme';

describe('renders Questions without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Questions />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('is there a div', () => {
        const wrapper = shallow(<Questions />);
        expect(wrapper.find('div')).toHaveLength(1);
    })
})