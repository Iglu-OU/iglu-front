import { render, screen } from '@testing-library/react'
import React from 'react'

import Icon, { ICON } from './Icon'

const iconId = 'icon'

it('should output icon', () => {
  render(<Icon name={ICON.ZOO} />)

  expect(screen.getByTestId(iconId)).toBeTruthy()
})
