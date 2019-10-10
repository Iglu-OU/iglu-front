import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import { LevelValues } from '../../common/semantics'
import { ICON } from '../Icon/Icon'

storiesOf('Button', module)
  .add('variants', () => (
    <>
      <p>
        <Button label="Button label" />
      </p>
      <ul className="list--unstyled list--inline">
        <li>
          <Button variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button variant={LevelValues.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button variant={LevelValues.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button variant={LevelValues.DANGER} iconRight={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button outlined={true} variant={LevelValues.PRIMARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button outlined={true} variant={LevelValues.SECONDARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button outlined={true} variant={LevelValues.SUCCESS} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button outlined={true} variant={LevelValues.DANGER} iconLeft={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button curved={true} variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button curved={true} variant={LevelValues.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button curved={true} variant={LevelValues.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button curved={true} variant={LevelValues.DANGER} iconRight={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button rounded={true} variant={LevelValues.PRIMARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button rounded={true} variant={LevelValues.SECONDARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button rounded={true} variant={LevelValues.SUCCESS} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button rounded={true} variant={LevelValues.DANGER} iconLeft={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button size="sm" rounded={true} variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="sm" rounded={true} variant={LevelValues.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="sm" rounded={true} variant={LevelValues.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="sm" rounded={true} variant={LevelValues.DANGER} iconRight={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button size="lg" curved={true} variant={LevelValues.PRIMARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="lg" curved={true} variant={LevelValues.SECONDARY} iconRight={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="lg" curved={true} variant={LevelValues.SUCCESS} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button size="lg" curved={true} variant={LevelValues.DANGER} iconLeft={ICON.ZOO} label="Button label" />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button size="sm" curved={true} variant={LevelValues.PRIMARY} iconRight={ICON.ZOO} />
        </li>
        <li>
          <Button rounded={true} outlined={true} variant={LevelValues.SECONDARY} iconRight={ICON.ZOO} />
        </li>
        <li>
          <Button size="lg" variant={LevelValues.SUCCESS} iconLeft={ICON.ZOO} />
        </li>
        <li>
          <Button curved={true} variant={LevelValues.DANGER} iconLeft={ICON.ZOO} />
        </li>
      </ul>
      <ul className="list--unstyled list--inline">
        <li>
          <Button size="sm" tiled={true} variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
        </li>
        <li>
          <Button
            tiled={true}
            outlined={true}
            variant={LevelValues.SECONDARY}
            iconLeft={ICON.ZOO}
            label="Button label"
          />
        </li>
        <li>
          <Button
            size="lg"
            tiled={true}
            curved={true}
            variant={LevelValues.SUCCESS}
            iconRight={ICON.ZOO}
            label="Button label"
          />
        </li>
        <li>
          <Button
            tiled={true}
            curved={true}
            outlined={true}
            variant={LevelValues.DANGER}
            iconRight={ICON.ZOO}
            label="Button label"
          />
        </li>
      </ul>

      <p>
        <Button align="left" fill={true} variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button align="center" fill={true} variant={LevelValues.SECONDARY} iconLeft={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button align="right" fill={true} variant={LevelValues.SUCCESS} iconRight={ICON.ZOO} label="Button label" />
      </p>
      <p>
        <Button fill={true} variant={LevelValues.DANGER} iconRight={ICON.ZOO} label="Button label" />
      </p>
    </>
  ))
  .add('outlined', () => (
    <>
      <Button variant={LevelValues.PRIMARY} iconLeft={ICON.ZOO} label="Button label" outlined={true} />
      <Button variant={LevelValues.SECONDARY} iconRight={ICON.ZOO} label="Button label" outlined={true} />
      <Button variant={LevelValues.SUCCESS} label="Button label" outlined={true} />
      <Button variant={LevelValues.DANGER} label="Button label" outlined={true} />
    </>
  ))
