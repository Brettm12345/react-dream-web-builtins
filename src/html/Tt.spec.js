/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tt from './Tt'
import { equal } from 'assert'

describe('html / Tt', () => {
  it('has displayName `Tt`', () => {
    equal(Tt.Component.displayName, 'Tt')
  })

  it('is an `tt` tag that gets all props', () => {
    const renderer = create(<Tt.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tt')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})