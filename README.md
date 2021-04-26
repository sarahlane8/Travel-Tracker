# Welcome to Wanderlust Excursions!

- [Description](#description)
- [Installation](#installation)
- [How To Use The Website](#how_to_use_the_website)
- [Technologies Used](#technologies_used)
- [Future Consideration](#future_considerations)
- [Contributor](#contributor)

### Description
The goal of this project was to design a user interface with accessibility in mind, while accessing and sending data from a remote API.  Object oriented programming and test driven development were utilized to ensure a properly functioning application.

### Installation
To use this application, follow these instructions:
* From your terminal, clone the repo.  
`$git clone git@github.com:sarahlane8/Travel-Tracker.git`  
* Move into the root directory of the project.  
* Install the required npm dependencies.  
`$npm install`
* Start the local server  
`$npm start`
* You must also clone down the Travel-Tracker API for the application to function properly. Open a separate tab in your terminal.  
`$git clone git@github.com:turingschool-examples/travel-tracker-api.git`
* Move into the root directory
* `$npm install`
* Start the local API server
* `$npm start`
* Open your browser [here](http://localhost:8080/) to be taken to the log in page
* You're ready to go!

### How To Use The Website

Log in to the website. All usernames begin with `traveler` followed by a number, which is the traveler's ID.  There are 50 travelers registered with the website, so any one of them may sign in.  Typing in `traveler20`, for example, will fetch Gregg's information.  All travelers have the same password of `travel2020`.  Usernames and passwords are case-sensitive, and a message will appear if the username and password do not meet the correct criteria.

<p align="center">
  <img src="https://media.giphy.com/media/3fqVJ73tvp2ErwrKXz/giphy.gif" alt="logIn demonstration"/>
</p>


The user dashboard greets the user at the top and displays their trips on the left side of the screen, separated by past trips, a current trip they may be on, upcoming trips, and any trips that are still pending an agent's approval.  It also displays how much money they have spent on trips in the last calendar year, if they have traveled during that time.  In the center, a request trip form exists so they may book future trips.  On the right, pictures of all the destinations that Wanderlust Excursions books to are available.

<p align="center">
<img height=250px; width = 500px; alt="UserDashboard" src="https://user-images.githubusercontent.com/70901622/116112002-640e2d80-a674-11eb-8bbb-89d6d3b9549d.png">
</p>

The request trip form allows a user to choose a start date, how many days they would like to go for, how many people are going, and where they would like to go.  They may start typing a location in the input field, and the destination cards on the right will filter down as they become more specific with their location, and then they may choose it from the drop down.  Clicking the estimate cost button will display how much the trip will be, including an agent's fee.
After they submit a trip request, the form will clear, and the pending trip will display on the user's dashboard.

<p align="center">
  <img src="https://media.giphy.com/media/VvTOx6yH5Yl6Mu1SqU/giphy.gif" alt="request a trip demo"/>
</p>


Several breakpoints were utilized to ensure the website would be accessible across devices.


<p align="center">
  <img src="https://media.giphy.com/media/yzeANV4boStFPKNild/giphy.gif" alt="breakpoints demonstration" />
</p>

### Technologies Used
* mocha
* chai
* Sass
* fetch API
* dayjs
* Webpack
* JavaScript

### Future Considerations
* Adding an agent login and dashboard to approve pending trips
* Allowing the trip cards to be clicked on to open up more information about that trip
* Allowing a user to upload photos associated with each trip, and notes about activities they did on teach trip

### Contributor
* Sarah Lane [GitHub Profile](https://github.com/sarahlane8)
* [Project Repository](https://github.com/sarahlane8/Travel-Tracker)
