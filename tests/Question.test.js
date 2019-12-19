import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../src/components/Question';
import Enzyme, { shallow } from 'enzyme';
import { expect as exp } from 'chai';

describe('renders Question without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Question />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('snapchot smoke test', () => {
        exp(shallow(<Question />)).toMatchSnapshot();
    })
})

