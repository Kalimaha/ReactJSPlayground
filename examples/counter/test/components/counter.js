import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../src/main/js/components/counter'

describe('Counter component', () => {

    let actions, component, value, button_one

    beforeEach(() => {
        actions = {
            onIncrement: expect.createSpy()
        }
        component = shallow(<Counter currentValue={0} {...actions} />)
        value = component.find('p')
        button_one = component.find('button').at(1)
    })

    it('should display the count', () => {
        expect(value.text()).toEqual(0)
    })

    it('should increase the count by one', () => {
        button_one.simulate('click')
        expect(actions.onIncrement).toHaveBeenCalled()
    })

})
