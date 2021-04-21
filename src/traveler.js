class Traveler {
  constructor(travelerInfo) {
    this.myTravelInfo = travelerInfo;
    console.log(travelerInfo)
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
  }
}


// properties:
// id:
// name:
// travelerType:
//myData
//separate out trips?

//method to filter all trips by 1 user to display all their trips (regardless of trip status)
//method to calculate total cost spent on trips + 10% of that total
//method to calculate cost of a proposed trip + 10%

export default Traveler;
