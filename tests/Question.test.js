import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../src/components/Question';
import Enzyme, { shallow } from 'enzyme';
import { expect as exp } from 'chai';

describe('renders Question without crashing', () => {
    // it('smoke test', () => {
    //     const div = document.createElement('div');
    //     ReactDOM.render(<Question />, div);
    //     ReactDOM.unmountComponentAtNode(div);
    // });
    // it('snapchot smoke test', () => {
    //     exp(shallow(<Question />)).toMatchSnapshot();
    // })

    // this will set up the variables once before running each of the tests
    let wrapper;
    let simData;
    let simFn;

    beforeAll(() => {
        // simulated data in same format as what <Question /> expects
        simData = {question: "On a dartboard, what number is directly opposite No. 1?", answers: [{isCorrect: true, answer: "19"}, {isCorrect: false, answer: "15"}, {isCorrect: false, answer: "12"}, {isCorrect: false, answer: "20"}], id: 1};
        // fake jest function
        simFn = jest.fn();
        // shallow render Question with correct properties
        wrapper = shallow(<Question button={simFn} question={simData} clicker={simFn} hasbeenclicked={false} score={1} />);
    })

    it('renders the correct question number', () => {
        expect(wrapper.find('.questionCounter').text()).toEqual('You are on Question 2 / 10');
    })

    it('renders the correct question text', () => {
        expect(wrapper.find('.questionQuestion').text()).toEqual('On a dartboard, what number is directly opposite No. 1?');
    })

    it('renders the Answer component', () => {
        expect(wrapper.find('Answer')).toHaveLength(4);
    })

})

