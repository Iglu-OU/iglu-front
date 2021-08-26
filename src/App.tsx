import React from 'react'

import Space from './components/Space/Space'
import Text from './components/Text/Text'

import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="column">
        <Space size="m">
          <Text element="h1">The story of Snowflake</Text>
          <Text element="h2">Lorem ipsum dolor sit amet</Text>
          <div style={{ color: 'var(--color-neutral-cool-40)' }}>
            <Text size="small">Written by AI · Aug 2021</Text>
          </div>
          <Text element="h5" bold>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </Space>

        <Space>
          <Text>
            Iglu created the snowball design system when it snowed and was cold. It was the Antartic. Eskimos were
            everywhere. I walked to the igloo. Inside I found a blue flag and a snowboard. But what the snowboard had no
            board. The snowboard had no snowboard. It was a bubble ice skates! A snowboard doesn’t have any head but a
            skate does.
          </Text>
          <Text>
            We play together online and the interface is as simple as designing a snowboard. We’re fun, we have lots of
            imagination and all you have to do is sit at a table and do something different for a few seconds. See the
            word and you have to do something with it.
          </Text>
          <Text>There are also other features. The ice can be frozen, there’s a pinball feature.</Text>
        </Space>
      </div>

      <div className="column">
        <Text element="h5" bold>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Text>

        <Space>
          <Text>
            Iglu created the snowball design system when it snowed and was cold. It was the Antartic. Eskimos were
            everywhere. I walked to the igloo. Inside I found a blue flag and a snowboard. But what the snowboard had no
            board. The snowboard had no snowboard. It was a bubble ice skates! A snowboard doesn’t have any head but a
            skate does.
          </Text>
          <Text>
            We play together online and the interface is as simple as designing a snowboard. We’re fun, we have lots of
            imagination and all you have to do is sit at a table and do something different for a few seconds. See the
            word and you have to do something with it.
          </Text>
          <Text>There are also other features. The ice can be frozen, there’s a pinball feature.</Text>
        </Space>
      </div>
    </div>
  )
}

export default App
