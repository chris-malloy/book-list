import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import BookList from '../../containers/BookList';

Enzyme.configure({ adapter: new Adapter() });

function setup(){
    const props = {
        selectBook: jest.fn()
    }

    const enzymeWrapper = mount(<BookList {...props} />);

    return{
        props,
        enzymeWrapper
    }
}

describe('containers', () => {
    describe('BookList', () => {
        it('should render without errors', () => {
            // const { enzymeWrapper } = setup();
            // expect(enzymeWrapper.find('ul').hasClass('list-group col-sm-4')).toBe(true);
        })
    })
})

// -TODO
// figure out with test expecting store prop
// try shallow test instead?