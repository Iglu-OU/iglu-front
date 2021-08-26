import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Button from './Button'

const buttonText = 'Click'
const buttonId = 'button-tag'

it('should output button with text', () => {
  render(<Button label={buttonText} />)

  expect(screen.getByText(buttonText)).toBeTruthy()
})

it('Should have type=button by default', () => {
  render(<Button />)

  expect(screen.getByTestId(buttonId)).toHaveProperty('type', 'button')
})

it('Should have the type if passed on', () => {
  render(<Button type="submit" />)

  expect(screen.getByTestId(buttonId)).toHaveProperty('type', 'submit')
})

it('Should output an anchor if called with a href', () => {
  const { container } = render(<Button type="submit" href="/url" />)

  // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
  expect(container.getElementsByTagName('a').length).toEqual(1)
  // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
  expect(container.getElementsByTagName('button').length).toEqual(0)
})

it('Should trigger event when clicked', () => {
  const onClick = jest.fn()
  render(<Button onClick={() => onClick()} />)

  fireEvent.click(screen.getByTestId(buttonId))
  expect(onClick).toHaveBeenCalled()
})

it('Should not trigger event when disabled', () => {
  const onClick = jest.fn()

  render(<Button disabled={true} onClick={onClick} />)

  fireEvent.click(screen.getByTestId(buttonId))
  expect(onClick).toBeCalledTimes(0)
})
