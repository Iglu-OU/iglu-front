import { Meta, Story } from '@storybook/react'

import Space, { SpaceProps } from './Space'

export default {
  title: 'Space',
  component: Space,
} as Meta

const Template: Story<ISpaceProps> = (args) => (
  <Space {...args}>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
    <div>Content</div>
  </Space>
)

export const Default = Template.bind({})
Default.args = { size: 'm', tag: 'div' }
