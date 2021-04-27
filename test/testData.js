let travelers = [
  {
    "id": 15,
    "name": "Monica Gellar",
    "travelerType": "relaxer"
  },
  {
    "id": 26,
    "name": "Ross Gellar",
    "travelerType": "thrill-seeker"
  },
  {
    "id": 13,
    "name": "Rachel Greene",
    "travelerType": "shopper"
  },
  {
    "id": 43,
    "name": "Joey Tribiani",
    "travelerType": "photographer"
  },
  {
    "id": 95,
    "name": "Phoebe Buffay",
    "travelerType": "thrill-seeker"
  },
  {
    "id": 63,
    "name": "Gunther Coffehouse",
    "travelerType": "shopper"
  },
  {
    "id": 27,
    "name": "Emily Walthum",
    "travelerType": "relaxer"
  },
  {
    "id": 81,
    "name": "Janice Janice",
    "travelerType": "history buff"
  },
  {
    "id": 59,
    "name": "Jack Gellar",
    "travelerType": "relaxer"
  },
  {
    "id": 100,
    "name": "Chandler Bing",
    "travelerType": "relaxer"
  }
]

let trips = [
  {
    "id": 1,
    "userID": 15,
    "destinationID": 44,
    "travelers": 1,
    "date": "2021/04/20",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": ["swimming"],
    "estimatedLodgingCostPerDay": 450,
    "estimatedFlightCostPerPerson": 80
  }, {
    "id": 2,
    "userID": 15,
    "destinationID": 22,
    "travelers": 4,
    "date": "2020/10/04",
    "duration": 18,
    "status": "pending",
    "suggestedActivities": ["swim with dolphins"],
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 650
  }, {
    "id": 3,
    "userID": 15,
    "destinationID": 12,
    "travelers": 3,
    "date": "2020/05/22",
    "duration": 17,
    "status": "pending",
    "suggestedActivities": ["swimming"],
    "estimatedLodgingCostPerDay": 150,
    "estimatedFlightCostPerPerson": 1200
  }, {
    "id": 43,
    "userID": 15,
    "destinationID": 14,
    "travelers": 2,
    "date": "2022/02/25",
    "duration": 10,
    "status": "approved",
    "suggestedActivities": ["zip-lining"],
    "estimatedLodgingCostPerDay": 70,
    "estimatedFlightCostPerPerson": 830
  }, {
    "id": 15,
    "userID": 95,
    "destinationID": 29,
    "travelers": 3,
    "date": "2020/04/30",
    "duration": 18,
    "status": "approved",
    "suggestedActivities": ["hiking"],
    "estimatedLodgingCostPerDay": 80,
    "estimatedFlightCostPerPerson": 1100
  }, {
    "id": 23,
    "userID": 27,
    "destinationID": 35,
    "travelers": 3,
    "date": "2020/06/29",
    "duration": 9,
    "status": "approved",
    "suggestedActivities": ["swimming"],
    "estimatedLodgingCostPerDay": 80,
    "estimatedFlightCostPerPerson": 1100
  }, {
    "id": 7,
    "userID": 27,
    "destinationID": 17,
    "travelers": 5,
    "date": "2020/5/28",
    "duration": 20,
    "status": "approved",
    "suggestedActivities": ["hiking"],
    "estimatedLodgingCostPerDay": 30,
    "estimatedFlightCostPerPerson": 1200
  }, {
    "id": 4,
    "userID": 81,
    "destinationID": 39,
    "travelers": 6,
    "date": "2021/02/07",
    "duration": 4,
    "status": "approved",
    "suggestedActivities": ["bike-riding"],
    "estimatedLodgingCostPerDay": 995,
    "estimatedFlightCostPerPerson": 90
  }, {
    "id": 80,
    "userID": 2,
    "destinationID": 19,
    "travelers": 5,
    "date": "2019/12/19",
    "duration": 19,
    "status": null,
    "suggestedActivities": null,
    "estimatedLodgingCostPerDay": 60,
    "estimatedFlightCostPerPerson": 500
  }, {
    "id": 70,
    "userID": 100,
    "destinationID": 50,
    "travelers": 6,
    "date": "2017/07/23",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": ["reading"],
    "estimatedLodgingCostPerDay": 1400,
    "estimatedFlightCostPerPerson": 75
  }
]

export { travelers, trips }
