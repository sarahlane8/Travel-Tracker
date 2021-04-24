const domUpdates = {
  greetUser(traveler) {
    let firstName = traveler.name.split(' ')[0];
    userGreeting.innerHTML = `Welcome back, ${firstName}!`;
  }
}


export default domUpdates;
