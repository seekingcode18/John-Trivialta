import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../src/containers/Questions';
import Question from '../src/components/Question';
import Enzyme, { shallow, mount } from 'enzyme';

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

    it('should check componentDidMount() calls getQuestions()', () => {
        const instance = wrapper.instance();
        jest.spyOn(instance, 'getQuestions');
        instance.componentDidMount();
        expect(instance.getQuestions).toHaveBeenCalledTimes(1);
    })

    it('should run the fetch after getQuestions() is called', () => {
        // spy on getQuestions AND fetch
        // instance() of wrapper ?
        // check getQuestions has been called once (may have to mock it)
        // check fetch has been called once
    })


    // it('fetch has been called', () => {
    //     const mockSuccessResponse = {};
    //     const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    //     const mockFetchPromise = Promise.resolve({json: () => mockJsonPromise});

    //     const wrapper = shallow(<Questions />);
    //     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    //     expect(global.fetch).toHaveBeenCalledTimes(1)
    //     expect(global.fetch).toHaveBeenCalledWith('https://opentdb.com/api.php?amount=10&category=${this.props.properties.category}&difficulty=${this.props.properties.difficulty}&type=multiple')

    //     process.nextTick(() => {
    //         expect(wrapper.state()).toEqual({
    //             // assert set state
    //             questions: {
    //                 "response_code": 0,
    //                 "results": [
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    //                 "correct_answer": "Richard Branson",
    //                 "incorrect_answers": [
    //                 "Alan Sugar",
    //                 "Donald Trump",
    //                 "Bill Gates"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    //                 "correct_answer": "Key",
    //                 "incorrect_answers": [
    //                 "Sword",
    //                 "Pen",
    //                 "Cellphone"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    //                 "correct_answer": "Cabbage Patch Kids",
    //                 "incorrect_answers": [
    //                 "Transformers",
    //                 "Care Bears",
    //                 "Rubik&rsquo;s Cube"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "What does the &#039;S&#039; stand for in the abbreviation SIM, as in SIM card? ",
    //                 "correct_answer": "Subscriber",
    //                 "incorrect_answers": [
    //                 "Single",
    //                 "Secure",
    //                 "Solid"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "What is the name of Poland in Polish?",
    //                 "correct_answer": "Polska",
    //                 "incorrect_answers": [
    //                 "Pupcia",
    //                 "Polszka",
    //                 "P&oacute;land"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;",
    //                 "correct_answer": "Print",
    //                 "incorrect_answers": [
    //                 "Digest",
    //                 "Look",
    //                 "Read"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "Terry Gilliam was an animator that worked with which British comedy group?",
    //                 "correct_answer": "Monty Python",
    //                 "incorrect_answers": [
    //                 "The Goodies&lrm;",
    //                 "The League of Gentlemen&lrm;",
    //                 "The Penny Dreadfuls"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "The Flag of the European Union has how many stars on it?",
    //                 "correct_answer": "12",
    //                 "incorrect_answers": [
    //                 "10",
    //                 "14",
    //                 "16"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "When someone is cowardly, they are said to have what color belly?",
    //                 "correct_answer": "Yellow",
    //                 "incorrect_answers": [
    //                 "Green",
    //                 "Red",
    //                 "Blue"
    //                 ]
    //                 },
    //                 {
    //                 "category": "General Knowledge",
    //                 "type": "multiple",
    //                 "difficulty": "easy",
    //                 "question": "What is the closest planet to our solar system&#039;s sun?",
    //                 "correct_answer": "Mercury",
    //                 "incorrect_answers": [
    //                 "Mars",
    //                 "Jupiter",
    //                 "Earth"
    //                 ]
    //                 }
    //                 ]
    //                 }
    //             })
    //             done()

    //     })
    // })

    // it('incrementor function works', () => {
    //     const wrapperMount = mount(<Questions properties={simulatedData} />);
    //     wrapperMount.setState({incrementor: 5, questions: 'sdssdsds'});
    //     let simData = {question: "On a dartboard, what number is directly opposite No. 1?", answers: [{isCorrect: true, answer: "19"}, {isCorrect: false, answer: "15"}, {isCorrect: false, answer: "12"}, {isCorrect: false, answer: "20"}], id: 1};
    //     let simFn = jest.fn();
    //     const wrapper2 = shallow(<Question button={simFn} question={simData} clicker={simFn} hasbeenclicked={false} score={1}/>)
    //     const spy = jest.spyOn(wrapperMount.instance(), "incrementor");
    //     wrapperMount.instance().forceUpdate()
    //     expect(spy).toHaveBeenCalledTimes(0)
    //     // wrapper
    //     // .find('div')
    //     // .find(Question)
    //     // .find('div')
    //     // .find('button')
    //     // .simulate("click")
    //     // expect(spy).toHaveBeenCalledTimes(1)
    //     expect(wrapperMount.find('div').find(wrapper2)).toHaveLength(1)
    //     // expect(wrapperMount.find('div').find(wrapper2).find('div').find('button')).toHaveLength(1)

    // })
})
