import { expect } from 'chai';
import { travelers } from './testData.js'//CHANGE THIS ONE!
import { trips } from './testData.js'
import Traveler from '../src/traveler.js'

let traveler;

describe('Traveler', () => {
  beforeEach(() => {
    traveler = new Traveler(travelers[0], )
  });

  it('should have an object of my data', () => {
    expect(traveler.myTravelInfo).to.be.an('object');
  })

  it('should have a property of ID', () => {
    expect(traveler.id).to.equal(15);
  })

  it('should have a property of name', () => {
    expect(traveler.name).to.equal("Monica Gellar");
  })

  it('should have a property of travelerType', () => {
    expect(traveler.travelerType).to.equal('relaxer');
  })

  it('should return a list of my trips based on a userID', () => {
    traveler.filterMyTrips(trips);
    expect(traveler.myTrips.length).to.equal(4);
  })

});
