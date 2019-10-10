import * as React from 'react'
import Button from './Button'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Button>', () => {
  it('should output a button', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find('button')).toHaveLength(1)
  })

  it('Should have type=button by default', () => {
    const wrapper = mount(<Button />)
    expect(
      wrapper
        .find('button')
        .getDOMNode()
        .getAttribute('type'),
    ).toEqual('button')
  })

  it('Should have the type if passed on', () => {
    const wrapper = mount(<Button type="submit" />)
    expect(
      wrapper
        .find('button')
        .getDOMNode()
        .getAttribute('type'),
    ).toEqual('submit')
  })

  it('Should output an anchor if called with a href', () => {
    const wrapper = mount(<Button type="submit" href="/url" />)
    expect(wrapper.find('a')).toHaveLength(1)
  })

  it('Should trigger event when clicked', (done) => {
    const wrapper = mount(<Button onClick={() => done()} />)
    wrapper.find('button').simulate('click')
  })

  it.skip('Should not trigger event when disabled', () => {})
})
