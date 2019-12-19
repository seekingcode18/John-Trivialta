import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';


describe('renders App without crashing', () => {
    it('smoke test', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders John Trivialta heading', () => {
        const wrapper = shallow(<App />);
        let title = wrapper.find('h2');
        expect(title.text()).toEqual('John Trivialta');
    });

    // it('snapshot test', () => {
    //     const tree = renderer
    //         .create(<Router></Router>)
    // })
})
