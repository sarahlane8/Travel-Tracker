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
  "date": "2019/09/16",
  "duration": 4,
  "status": "approved",
  "suggestedActivities": ["swimming"]
}, {
  "id": 2,
  "userID": 26,
  "destinationID": 22,
  "travelers": 4,
  "date": "2020/10/04",
  "duration": 18,
  "status": "pending",
  "suggestedActivities": ["swim with dolphins"]
}, {
  "id": 3,
  "userID": 13,
  "destinationID": 12,
  "travelers": 3,
  "date": "2020/05/22",
  "duration": 17,
  "status": "pending",
  "suggestedActivities": ["swimming"]
}, {
  "id": 43,
  "userID": 43,
  "destinationID": 14,
  "travelers": 2,
  "date": "2020/02/25",
  "duration": 10,
  "status": "approved",
  "suggestedActivities": ["zip-lining"]
}, {
  "id": 15,
  "userID": 95,
  "destinationID": 29,
  "travelers": 3,
  "date": "2020/04/30",
  "duration": 18,
  "status": "approved",
  "suggestedActivities": ["hiking"]
}, {
  "id": 23,
  "userID": 63,
  "destinationID": 35,
  "travelers": 3,
  "date": "2020/06/29",
  "duration": 9,
  "status": "approved",
  "suggestedActivities": ["swimming"]
}, {
  "id": 7,
  "userID": 27,
  "destinationID": 17,
  "travelers": 5,
  "date": "2020/5/28",
  "duration": 20,
  "status": "approved",
  "suggestedActivities": ["hiking"]
}, {
  "id": 4,
  "userID": 81,
  "destinationID": 39,
  "travelers": 6,
  "date": "2021/02/07",
  "duration": 4,
  "status": "approved",
  "suggestedActivities": ["bike-riding"]
}, {
  "id": 9,
  "userID": 59,
  "destinationID": 19,
  "travelers": 5,
  "date": "2019/12/19",
  "duration": 19,
  "status": "approved",
  "suggestedActivities": ["swimming"]
}, {
  "id": 70,
  "userID": 100,
  "destinationID": 80,
  "travelers": 6,
  "date": "2020/07/23",
  "duration": 17,
  "status": "approved",
  "suggestedActivities": ["reading"]
}
]

export { travelers, trips }
