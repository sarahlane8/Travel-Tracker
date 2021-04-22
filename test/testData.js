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
    "userID": 63,
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
    "id": 9,
    "userID": 59,
    "destinationID": 19,
    "travelers": 5,
    "date": "2019/12/19",
    "duration": 19,
    "status": "approved",
    "suggestedActivities": ["swimming"],
    "estimatedLodgingCostPerDay": 60,
    "estimatedFlightCostPerPerson": 500
  }, {
    "id": 70,
    "userID": 100,
    "destinationID": 50,
    "travelers": 6,
    "date": "2020/07/23",
    "duration": 17,
    "status": "approved",
    "suggestedActivities": ["reading"],
    "estimatedLodgingCostPerDay": 1400,
    "estimatedFlightCostPerPerson": 75
  }
]

let destinations = [
  {
    "id": 14,
    "destination": "Lima, Peru",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 400,
    "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
    "alt": "overview of city buildings with a clear sky"
  },
  {
    "id": 22,
    "destination": "Stockholm, Sweden",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 70,
    "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with boats on the water during the day time"
  }, {
    "id": 12,
    "destination": "Sydney, Austrailia",
    "estimatedLodgingCostPerDay": 430,
    "estimatedFlightCostPerPerson": 1050,
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "opera house and city buildings on the water with boats"
  }, {
    "id": 44,
    "destination": "Cartagena, Colombia",
    "estimatedLodgingCostPerDay": 25,
    "estimatedFlightCostPerPerson": 300,
    "image": "https://images.unsplash.com/photo-1558029697-a7ed1a4b94c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    "alt": "boats at a dock during the day time"
  }, {
    "id": 25,
    "destination": "Madrid, Spain",
    "estimatedLodgingCostPerDay": 140,
    "estimatedFlightCostPerPerson": 800,
    "image": "https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "city with clear skys and a road in the day time"
  }, {
    "id": 63,
    "destination": "Jakarta, Indonesia",
    "estimatedLodgingCostPerDay": 700,
    "estimatedFlightCostPerPerson": 80,
    "image": "https://images.unsplash.com/photo-1555333145-4acf190da336?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "lit up city at night"
  }, {
    "id": 73,
    "destination": "Paris, France",
    "estimatedLodgingCostPerDay": 90,
    "estimatedFlightCostPerPerson": 415,
    "image": "https://images.unsplash.com/photo-1524396309943-e03f5249f002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
    "alt": "city during the day time with eiffel tower"
  }, {
    "id": 18,
    "destination": "Tokyo, Japan",
    "estimatedLodgingCostPerDay": 425,
    "estimatedFlightCostPerPerson": 100,
    "image": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80",
    "alt": "city with people walking in crosswalk and brightly lit shops at night"
  }, {
    "id": 93,
    "destination": "Amsterdam, Netherlands",
    "estimatedLodgingCostPerDay": 600,
    "estimatedFlightCostPerPerson": 450,
    "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "alt": "canal with boats and trees and buildings along the side"
  }, {
    "id": 97,
    "destination": "Toronto, Canada",
    "estimatedLodgingCostPerDay": 900,
    "estimatedFlightCostPerPerson": 550,
    "image": "https://images.unsplash.com/photo-1535776142635-8fa180c46af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2756&q=80"
  }
]

export { travelers, trips, destinations }
