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
    expect(trip.userID).to.equal(100);
  })

  it('should have a property of destinationID', () => {
    expect(trip.destinationID).to.equal(50);
  })

  it('should have a property of number of travelers', () => {
    expect(trip.travelers).to.equal(6);
  })

  it('should have a property of trip start date', () => {
    expect(trip.date).to.equal('2017/07/23');
  })

  it('should have a property of duration', () => {
    expect(trip.duration).to.equal(17);
  })
})
