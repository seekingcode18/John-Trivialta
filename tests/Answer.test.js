import React from 'react';
import ReactDOM from 'react-dom';
import Answer from '../src/components/Answer';
import Enzyme, { shallow, mount } from 'enzyme';

describe('renders Answer.js without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Answer />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('calls decodeHtml() on render', () => {
        // shallow render Answer and spy on decodeHtml()
        //   then forceUpdate so we can check that it's been called on (re)render
        const simFn = jest.fn();
        const wrapper = shallow(<Answer isCorrect={'true'} background={'white'} key={100} hasbeenclicked={simFn} text={'hello'} clicker={simFn} />);
        const spy = jest.spyOn(wrapper.instance(), 'decodeHtml');
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    it('should call checkAnswer on click of p', () => {
        const simFn = jest.fn()
        const wrapper = shallow(<Answer isCorrect={'true'} background={'white'} key={100} hasbeenclicked={simFn} text={'hello'} clicker={simFn} />);

        const spy = jest.spyOn(wrapper.instance(), 'checkAnswer')
        wrapper.instance().forceUpdate();
        expect(spy).toHaveBeenCalledTimes(0);
        wrapper.find('p').simulate("clickCapture");
        expect(spy).toHaveBeenCalledTimes(1);

    })

    // it('state turns green on click', () => {
    //     const simFn = jest.fn()
    //     const wrapper = mount(<Answer isCorrect={'true'} background={'white'} key={100} hasbeenclicked={false} text={'hello'} clicker={simFn} />);
    //     // const p = wrapper.find('p')
    //     // expect(p).toHaveLength(1);
    //     // p.simulate('clickCapture', {target: {id: "true"}});
    //     wrapper.setState({background: "green"}, () => {
    //         wrapper.forceUpdate()
    //         expect(wrapper.state('background')).toEqual('green')
    //     })
    // })
})
