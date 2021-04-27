import { expect } from 'chai';
import { travelers, trips } from './testData.js'
import Traveler from '../src/traveler.js'

let traveler, myTrips, trip;

describe('Traveler', () => {
  beforeEach(() => {
    traveler = new Traveler(travelers[0]);
    myTrips = trips.filter(trip => trip.userID === traveler.id);
    traveler.myTrips = myTrips;
    trip = {
      id: 206,
      userID: 15,
      destinationID: 18,
      travelers: 2,
      date: '2021/12/05',
      duration: 10,
      status: 'pending',
      suggestedActivities: [],
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 930
    };

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

  it('should return a list of trips based on a userID', () => {
    expect(myTrips.length).to.equal(4);
  })

  it('should not have trips if a traveler has never booked a trip', () => {
    const traveler4 = new Traveler(travelers[8])
    myTrips = trips.filter(trip => trip.userID === traveler4.id);
    traveler4.sortMyTrips(myTrips);

    expect(traveler4.myTrips).to.deep.equal([])
  })

  it('should sort my trips by past, present, future, and pending trips', () => {
    traveler.sortMyTrips(myTrips);

    expect(traveler.myCurrentTrip).to.deep.equal(undefined);
    expect(traveler.myPastTrips.length).to.equal(1);
    expect(traveler.myFutureTrips.length).to.equal(1);
    expect(traveler.myPendingTrips.length).to.equal(2);
  })

  it('should calculate how much a traveler has spend on their trips in the past year', () => {
    expect(traveler.calculateSpentOnTripsThisYear('2021/04/28')).to.equal("You spent $13475.00 on trips in the last year!");
  })

  it('should calculate cost in last year for different travelers', () => {
    const traveler3 = new Traveler(travelers[6]);
    myTrips = trips.filter(trip => trip.userID === traveler3.id);
    traveler3.sortMyTrips(myTrips);

    expect(traveler3.calculateSpentOnTripsThisYear('2021/04/28')).to.equal("You spent $11682.00 on trips in the last year!");
  })

  it('should return a string if a traveler hasn\'t traveled in the last 12 months', () => {
    const traveler2 = new Traveler(travelers[9]);
    myTrips = trips.filter(trip => trip.userID === traveler2.id);
    traveler2.sortMyTrips(myTrips);
    traveler2.calculateSpentOnTripsThisYear('2021/04/22');

    expect(traveler2.calculateSpentOnTripsThisYear('2021/04/22'))
      .to.equal("You haven't traveled with us recently! We'd love to help you book your next trip!");
  })

  it('should be able to add a trip to a user\'s myTrips property', () => {
    traveler.addTrip('myTrips', trip);

    expect(traveler.myTrips.length).to.equal(5);
  })

});
