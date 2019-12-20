import React from 'react';
import ReactDOM from 'react-dom';
import SetUp from '../src/components/SetUp';
import Enzyme, { shallow, mount } from 'enzyme';

describe('renders Setup without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SetUp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render correctly', () => {
        expect(shallow(<SetUp />)).toMatchSnapshot();
    })

    it('renders John Trivialta heading', () => {
        const wrapper = shallow(<SetUp />);
        let title = wrapper.find('h3');
        expect(title.text()).toEqual('Set up your quiz');
    });

    it('renders the form', () => {
        const wrapper = shallow(<SetUp />);
        let form = wrapper.find('form');
        expect(form.length).toEqual(1);
    });

    it('renders the Submit link', () => {
        const wrapper = shallow(<SetUp />);
        let link = wrapper.find('a');
        expect(link.length).toEqual(1);
    })

})
