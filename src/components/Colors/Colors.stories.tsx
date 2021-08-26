import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf('Colors', module).add('Palette', () => (
  <div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-white)' }}>White</div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-black)' }}>black</div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-info)' }}>Info</div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-success)' }}>Success</div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-warning)' }}>Warning</div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-danger)' }}>Danger</div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-10)' }}>
        Neutral cool 10
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-20)' }}>
        Neutral cool 20
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-30)' }}>
        Neutral cool 30
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-40)' }}>
        Neutral cool 40
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-70)' }}>
        Neutral cool 70
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-80)' }}>
        Neutral cool 80
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-cool-90)' }}>
        Neutral cool 90
      </div>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-10)' }}>
        Neutral warm 10
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-20)' }}>
        Neutral warm 20
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-30)' }}>
        Neutral warm 30
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-40)' }}>
        Neutral warm 40
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-70)' }}>
        Neutral warm 70
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-80)' }}>
        Neutral warm 80
      </div>
      <div style={{ margin: 10, padding: 5, width: 150, height: 100, background: 'var(--color-neutral-warm-90)' }}>
        Neutral warm 90
      </div>
    </div>
  </div>
))
