/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Strike from './Strike'
import { equal } from 'assert'

describe('html / Strike', () => {
  it('has displayName `Strike`', () => {
    equal(Strike.Component.displayName, 'Strike')
  })

  it('is an `strike` tag that gets all props', () => {
    const renderer = create(<Strike.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'strike')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})