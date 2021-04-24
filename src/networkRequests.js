
//************FETCHING ALL DATA************//
const fetchAllData = id => {

  const tripsData = fetch('http://localhost:3001/api/v1/trips')
    .then(response => response.json())
    .then(tripsData => {
      // console.log(15, tripsData)
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

    return Promise.all([travelersData, tripsData, destinationsData, singleTravelerData])
      .then(data => {
      const allData = {};
      allData.travelersData = data[0];
      allData.tripsData = data[1];
      allData.destinationsData = data[2];
      allData.singleTravelerData = data[3];
      return allData;
  })
  .catch(err => console.log('ERROR', err));

}

//************FETCHING A SINGLE TRAVELER'S DATA************//
const fetchSingleTravelerData = id => {
  const singleTravelerData = fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => response.json())
    .then(singleTravelerData => {
      return response;
    })
    .catch(err => console.log('ERROR', err));
};
//************FETCHING ALL TRAVELERS' DATA************//
const fetchAllTravelersData = () => {
  const travelersData = fetch('http://localhost:3001/api/v1/travelers')
    .then(response => response.json())
    .then(travelersData => {
      return travelersData;
    })
    .catch(err => console.log('ERROR', err));
};

//************ADDING A NEW TRIP FOR APPROVAL************//
const addNewTrip = object => {
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .catch(err => console.log('ERROR', err));
}

//************ADDING A NEW DESTINATION************//
const addNewDestination = object => {
  fetch('http://localhost:3001/api/v1/destinations', {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .catch(err => console.log('ERROR', err));
}





export { fetchAllData, fetchSingleTravelerData, addNewTrip, addNewDestination };
