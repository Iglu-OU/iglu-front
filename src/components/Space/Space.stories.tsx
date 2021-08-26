import { Story } from '@storybook/react'
import React from 'react'

import Space, { SpaceProps } from './Space'

const Template: Story<SpaceProps> = (args: SpaceProps) => <Space {...args} />

export const Primary = Template.bind({})
