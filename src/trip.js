class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status || 'pending';
    this.suggestedActivities = tripData.suggestedActivities || [];
    this.estimatedLodgingCostPerDay = tripData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = tripData.estimatedFlightCostPerPerson;
  }

  estimateTripCost() {
    let totalFlightCost = this.travelers * this.estimatedFlightCostPerPerson;
    let totalLodgingCost = this.estimatedLodgingCostPerDay * this.duration;
    let totalCost = totalFlightCost + totalLodgingCost;
    let total = (totalCost * 0.1) + totalCost;
    let finalCost = Number(total).toFixed(2);
    return parseInt(finalCost);
  }
}

export default Trip;
