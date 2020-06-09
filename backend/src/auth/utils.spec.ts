import * as chai from 'chai'
import { parseToken } from './utils'

const expect = chai.expect

describe('auth/utils', () => {
  describe('parseToken', () => {
    it('should return token if valid authorization header provided', () => {
      const fakeAuthHeader = 'bearer 12345'
      const token = parseToken(fakeAuthHeader)
      expect(token).to.be.string('12345')
    })

    it('should throw error if authorization header not provided', () => {
      expect(() => {
        parseToken('')
      }).to.throw(Error, 'No authentication header')
    })

    it('should throw error if invalid authorization header provided', () => {
      expect(() => {
        parseToken('fake authHeader')
      }).to.throw(Error, 'Invalid authentication header')
    })
  })
})
