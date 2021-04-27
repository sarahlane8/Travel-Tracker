import domUpdates from './domUpdates.js';
// import './scripts.js'

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
      const allData = {};
      allData.tripsData = data[0];
      allData.destinationsData = data[1];
      allData.singleTravelerData = data[2];
      return allData;
  })
  .catch(err => console.log(32, err))
  //   if (err) {
  //
  //   // console.log(33, err === 'Failed to fetch')
  //   document.querySelector('.user-total-money-spent').innerHtml = err;
  // }
  // })

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



//************ADDING A NEW TRIP FOR APPROVAL************//
const addNewTrip = tripObject => {
  // console.log('OBJECT', tripObject)
  return fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    body: JSON.stringify(tripObject),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    // checkForError(response)
    if (response.message === `Trip with id ${tripObject.id} successfully posted`) {
      console.log('hallelujah!')
      console.log(73, response)
        return response;
    }
    if (response.message === "You are missing a required parameter of destinationID") {
      domUpdates.displaySubmissionErrorMessage();
      // domUpdates.displayDestinationCards(destinations.destinations)
    }
    console.log('POST', response)

  // return response;//give me a message saying it worked
})
  .catch(err => console.log('ERROR', err));
}

// checkForError(response)
//************ADDING A NEW DESTINATION************//
// const addNewDestination = object => {
//   fetch('http://localhost:3001/api/v1/destinations', {
//     method: 'POST',
//     body: JSON.stringify(object),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .catch(err => console.log('ERROR', err));
// }





export { fetchAllData, fetchSingleTravelerData, addNewTrip };
