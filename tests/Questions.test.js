import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';
import Question from '../src/components/Question';
import { shallow , mount } from 'enzyme';

describe('renders Questions without crashing', () => {
    let simulatedData;
    let wrapper;

    beforeAll(() => {
        // simulated data in same format as what <Questions /> expects
        simulatedData = {difficulty: 'easy', category: 9};
        // shallow render Question with correct properties
        wrapper = shallow(<Questions properties={simulatedData} />);
    })

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
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

    it('should check componentDidMount() calls getQuestions()', () => {
        const instance = wrapper.instance();
        jest.spyOn(instance, 'getQuestions');
        instance.componentDidMount();
        expect(instance.getQuestions).toHaveBeenCalledTimes(1);
    })

    it('should run the fetch after componentDidMount()', () => {
        const wrapper = shallow(<Questions properties={simulatedData} />);
        // instance() of wrapper
        const instance = wrapper.instance();
        // spy on getQuestions AND fetch
        jest.spyOn(instance, 'getQuestions');
        // check getQuestions has been called once (may have to mock it)
        instance.forceUpdate();

        // mock the fetch
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});

        // spy on the fetch and expect it to have been called once after component mounts
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
        instance.componentDidMount();
        expect(global.fetch).toHaveBeenCalledTimes(1)
    })

    // it('should run incrementor() when Next button is pressed inside the <Question /> component', () => {
    //     const simulatedQuestionsData = {difficulty: 'easy', category: 9};
    //     const simulatedQuestion = {id:1, answers: [{isCorrect: true, answer: 'asdasdf'}]};
    //     const wrapper = mount(<Questions properties={simulatedQuestionsData} />);

    //     const simFn = jest.fn();
    //     const questionWrapper = shallow(<Question button={simFn} question={simulatedQuestion} clicker={simFn} hasbeenclicked={false} score= {0}  />)

    //     // spy on incrementor
    //     const spy = jest.spyOn(wrapper.instance(), 'incrementor');

    //     // mock state.incr < 10 && state.Qs !null
    //     wrapper.setState({questions: {}, incrementor: 1})

    //     // dig inside <Question />
    //     // simulate click on button
    //     // expect incrementor() to have been called once
    //     wrapper.find(questionWrapper).find('button').simulate('click')

    //     expect(spy).toHaveBeenCalledTimes(1)
    // })
})
