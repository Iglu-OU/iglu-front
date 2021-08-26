import React from 'react'

import './Space.scss'

export interface SpaceProps {
  tag?: 'div' | 'ul'
  size?: 'xxxs' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xxl' | 'xxxl' | 'xxxxl' | 'none'
  className?: string
}

const Space: React.FC<SpaceProps> = React.memo(({ tag, size = 16, className = '', children }) => {
  const Tag = tag ? tag : 'div'
  return <Tag className={`space space--${size} ${className}`}>{children}</Tag>
})

export default Space
