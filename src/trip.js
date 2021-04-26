class Trip {
  constructor(tripData) {
    this.id = tripData.id
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = "pending";
    this.suggestedActivities = [];
    this.estimatedLodgingCostPerDay = tripData.estimatedLodgingCostPerDay;
    this.estimatedFlightCostPerPerson = tripData.estimatedFlightCostPerPerson;
  }

  estimateTripCost() {
    let totalFlightCost = this.travelers * this.estimatedFlightCostPerPerson;
    let totalLodgingCost = this.estimatedLodgingCostPerDay * this.duration;
    let totalCost = totalFlightCost + totalLodgingCost;
    let total = (totalCost * 0.1) + totalCost;
    let finalCost = Number.parseFloat(total).toFixed(2);
    return finalCost;
  }
}

export default Trip;
