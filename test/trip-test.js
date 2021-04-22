import { expect } from 'chai';
import { travelers } from './testData.js'//CHANGE THIS ONE!
import { trips } from './testData.js'
import Trip from '../src/trip.js'

let trip;

describe('Trip', () => {
  beforeEach(() => {
    trip = new Trip(trips[9]);
  })

  it('should have a property of id', () => {
    expect(trip.id).to.equal(70);
  })

  it('should have a property of userID', () => {
    expect(trip.property).to.equal(100)
  })
})
