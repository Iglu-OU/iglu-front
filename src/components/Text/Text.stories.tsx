import { Meta, Story } from '@storybook/react'

import Text, { ITextProps } from './Text'

export default {
  title: 'Text',
  component: Text,
} as Meta

const Template: Story<ITextProps> = (args) => <Text {...args}>The story of Snowflake</Text>

export const Default = Template.bind({})
Default.args = {}

export const Examples = () => (
  <div>
    <Text element="h1">The story of Snowflake</Text>
    <Text element="h2">Lorem ipsum dolor sit amet</Text>
    <Text element="h3">Lorem ipsum dolor sit amet</Text>
    <Text element="h4">Lorem ipsum dolor sit amet</Text>
    <Text size="small">Written by AI · Aug 2021</Text>
    <Text element="h5" bold>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </Text>
    <Text>
      Iglu created the snowball design system when it snowed and was cold. It was the Antartic. Eskimos were everywhere.
      I walked to the igloo. Inside I found a blue flag and a snowboard. But what the snowboard had no board. The
      snowboard had no snowboard. It was a bubble ice skates! A snowboard doesn’t have any head but a skate does.
      feature.
    </Text>
    <Text>
      We play together online and the interface is as simple as designing a snowboard. We’re fun, we have lots of
      imagination and all you have to do is sit at a table and do something different for a few seconds. See the word
      and you have to do something with it.
    </Text>
    <Text>There are also other features. The ice can be frozen, there’s a pinball feature.</Text>
  </div>
)
