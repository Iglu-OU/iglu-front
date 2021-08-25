import cn from 'classnames'
import React from 'react'

type THeadingLevel = 1 | 2 | 3 | 4 | 5
type THeadingElement = `h${THeadingLevel}`
type TElement = 'p' | 'span' | THeadingElement

interface ITextProps {
  /**
   * Heading children
   */
  children: React.ReactNode
  /**
   * Element, defaults to p tag
   */
  element?: TElement
  /**
   * Additional custom class.
   */
  className?: string
  /**
   * ID attribute.
   */
  id?: string
  /**
   * Is text bold
   */
  bold?: boolean
  /**
   * Is text italic
   */
  italic?: boolean
  /**
   * Is text uppercase
   */
  uppercase?: boolean
  /**
   * Is text lowercase
   */
  lowercase?: boolean
  /**
   * Is text capitalize
   */
  capitalize?: boolean
  /**
   * Is text linethrough
   */
  linethrough?: boolean
}

const Text = (props: ITextProps): JSX.Element => {
  const { children, element = 'p', className, id, bold, capitalize, italic, linethrough, uppercase, lowercase } = props

  const BEM = (): string => {
    return cn(className, {
      'text-bold': bold,
      'text-capitalize': capitalize,
      'text-italic': italic,
      'text-linethrough': linethrough,
      'text-uppercase': uppercase,
      'text-lowercase': lowercase,
    })
  }

  const ElementTag = element

  return (
    <ElementTag id={id} className={BEM()}>
      {children}
    </ElementTag>
  )
}

export default Text
