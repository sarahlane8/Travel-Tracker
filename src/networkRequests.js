import domUpdates from './domUpdates.js';
import './scripts.js'

//************FETCHING ALL DATA************//
const fetchAllData = id => {

  const tripsData = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(tripsData => {
      return tripsData;
    });

  const destinationsData = fetch('http://localhost:3001/api/v1/destinations')
    .then(response => response.json())
    .then(destinationsData => {
      return destinationsData;
    });

  const singleTravelerData = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(singleTravelerData => {
      return singleTravelerData;
    });

  return Promise.all([tripsData, destinationsData, singleTravelerData])
    .then(data => {
      const allData = {}
      allData.tripsData = data[0]
      allData.destinationsData = data[1]
      allData.singleTravelerData = data[2]
      return allData;
    })
    .catch(err => domUpdates.displayServerIsDownMessage());
}

//************FETCHING A SINGLE TRAVELER'S DATA************//
const fetchSingleTravelerData = id => {
  const singleTravelerData = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(singleTravelerData => {
      return response;
    })
    .catch(err => domUpdates.displayServerIsDownMessage());
};
//************FETCHING ALL TRAVELERS' DATA************//



//************ADDING A NEW TRIP FOR APPROVAL************//
const addNewTrip = tripObject => {
  return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(tripObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      if (response.message === `Trip with id ${tripObject.id} successfully posted`) {
        return response;
      }
      if (response.message === "You are missing a required parameter of destinationID") {
        domUpdates.displayServerIsDownMessage();
      }
    })
    .catch(err => domUpdates.displayServerIsDownMessage());
}


export { fetchAllData, fetchSingleTravelerData, addNewTrip };
