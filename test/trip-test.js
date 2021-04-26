import { expect } from 'chai';
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

  it('should have a property of status', () => {
    expect(trip.status).to.equal('approved');
  })

  it('should have a property of suggestedActivities', () => {
    expect(trip.suggestedActivities).to.deep.equal(['reading']);
  })

  it('should have a property of estimatedLodgingCostPerDay', () => {
    expect(trip.estimatedLodgingCostPerDay).to.equal(1400);
  })

  it('should have a property of estimatedFlightCostPerPerson', () => {
    expect(trip.estimatedFlightCostPerPerson).to.equal(75);
  })

  it('should estimate how much a trip will cost', () => {
    expect(trip.estimateTripCost()).to.equal(26675.00)
  })
})
