const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  }); 

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = "${prophets[i].name} ${prophets[i].lastname}";
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
  // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}