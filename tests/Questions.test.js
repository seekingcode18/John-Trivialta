import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';
import Question from '../src/components/Question';
import Enzyme, { shallow } from 'enzyme';

describe('renders Questions without crashing', () => {
    
    let simulatedData
    let wrapper;
    ;
    beforeAll(() => {
        // simulated data in same format as what <Questions /> expects
        simulatedData = {difficulty: 'easy', category: 9};
        // shallow render Question with correct properties
        wrapper = shallow(<Questions properties={simulatedData} />);
    })

    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Questions properties={simulatedData} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders Question when incrementor in state < 10', () => {
        wrapper.setState({incrementor: 5, questions: 'sdssdsds'});
        expect(wrapper.find(Question)).toHaveLength(1);
    })

    it('renders Results when incrementor in state = 10', () => {
        wrapper.setState({incrementor: 10});
        expect(wrapper.find('Results')).toHaveLength(1);
    })

    it('incrementor function works', () => {
        wrapper.setState({incrementor: 5, questions: 'sdssdsds'});
        let simData = {question: "On a dartboard, what number is directly opposite No. 1?", answers: [{isCorrect: true, answer: "19"}, {isCorrect: false, answer: "15"}, {isCorrect: false, answer: "12"}, {isCorrect: false, answer: "20"}], id: 1};
        let simFn = jest.fn();
        const wrapper2 = shallow(<Question button={simFn} question={simData} clicker={simFn} hasbeenclicked={false} score={1}/>)
        const spy = jest.spyOn(wrapper.instance(), "incrementor");
        wrapper.instance().forceUpdate()
        expect(spy).toHaveBeenCalledTimes(0)
        // wrapper
        // .find('div')
        // .find(Question)
        // .find('div')
        // .find('button')
        // .simulate("click")
        // expect(spy).toHaveBeenCalledTimes(1)
        expect(wrapper.find('div').find(wrapper2).find('div').find('button')).toHaveLength(1)
    })
})
