import React from 'react'
import cn from 'classnames'

import './Icon.scss'

import { ReactComponent as Zoo } from './Icons/zoo.svg'

export const ICON = {
  ZOO: 'zoo',
}

export interface IconProps {
  name: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className }: IconProps) => {
  switch (name) {
    case ICON.ZOO:
      return <Zoo data-testid="icon" className={BEM()} />
    default:
      return null
  }

  function BEM(): string {
    return cn('icon', className)
  }
}

export default Icon
