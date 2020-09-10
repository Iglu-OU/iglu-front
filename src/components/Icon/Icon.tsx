import cn from 'classnames'
import React from 'react'

import { ReactComponent as Zoo } from './Icons/zoo.svg'

import './Icon.scss'

export const ICON = {
  ZOO: Zoo,
}

// eslint-disable-next-line
export type ICON = EnumLiteralsOf<typeof ICON>
export interface IconProps {
  name: ICON
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, className }: IconProps) => {
  const IconRender = name

  return <IconRender data-testid="icon" className={BEM()} />

  function BEM(): string {
    return cn('icon', className)
  }
}

export default Icon
