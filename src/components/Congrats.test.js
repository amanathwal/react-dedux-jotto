import React from 'react';

import Congrats from './Congrats';
import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => shallow(<Congrats {...props} />);


it('renders without error', () => {
    const component = setup();
    expect(component).toBeDefined();
});


it('renders no text when `success` prop is false', () => {
    const component = setup({ success: true })
    expect(component.find('.success')).toHaveLength(1);
});


it('renders non empty congrats message when `success` prop is true', () => {
    const component = shallow(<Congrats success='false'/>);
    expect(component.find('.success')).toHaveLength(1);
});