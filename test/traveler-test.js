import { expect } from 'chai';
import { travelers } from './testData.js'//CHANGE THIS ONE!
import Traveler from '../src/traveler.js'

let traveler;

describe('Traveler', () => {
  beforeEach(() => {
    traveler = new Traveler(travelers[0])
  });

  it('should have an object of my data', () => {
    expect(traveler.myTravelInfo).to.be.an('object');
  })

});
