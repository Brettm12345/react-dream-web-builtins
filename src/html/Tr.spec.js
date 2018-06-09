/* Generated code, from '/scripts/generatePrimitives.js' */
// Don't do manual modifications, they will be overriden
import React from 'react'
import { create } from 'react-test-renderer'
import Tr from './Tr'
import { equal } from 'assert'

describe('html / Tr', () => {
  it('has displayName `Tr`', () => {
    equal(Tr.Component.displayName, 'Tr')
  })

  it('is an `tr` tag that gets all props', () => {
    const renderer = create(<Tr.Component prop="https://wikipedia.org" />)

    equal(renderer.toJSON().type, 'tr')
    equal(renderer.toJSON().props.prop, 'https://wikipedia.org')
  })
})