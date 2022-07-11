// Question 1

let deckShuffleUrl = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


let shuffle = axios.get(deckShuffleUrl);

// shuffle
// .then(data => {

// let deckId = data['data']['deck_id'];

// return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)

// }).then(cardResp => {
//     console.log(cardResp)
//     let card = cardResp['data']['cards'][0];
//     console.log(`${card['value']} of ${card['suit']}`);
    
// })

// Question 2



// shuffle
// .then(data =>{
//     return data['data']['deck_id'];
//     })
// .then((id) => {

//     return axios.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)

// }).then(firstResp => {

//     let card1 = firstResp['data']['cards'][0];
//     console.log(`${card1['value']} of ${card1['suit']}`);
//     return axios.get(`http://deckofcardsapi.com/api/deck/${arr[0]}/draw/?count=1`)
    
// })
//take2
let twoCards = [];

shuffle
.then(data =>{
    return data['data']['deck_id'];
    })
.then((id) => {
for (let i = 1; i < 3; i++) {
    twoCards.push(
      axios.get(`http://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    );
  }

  Promise.all(twoCards)
  .then(cardsArr => (
    cardsArr.forEach(c => console.log(`${c['data']['cards'][0]['value']} of ${c['data']['cards'][0]['suit']} `))
  ))
  .catch(err => console.log(err));
})

//part 3

let table = document.getElementById('drawn-cards');

function drawCard(e){

let deckId = e.target.getAttribute('data-deck-id');

let draw = axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);

draw
.then(data => {

let card = document.createElement('li');
card.innerText = `${data['data']['cards'][0]['value']} of ${data['data']['cards'][0]['suit']} `
table.append(card);

})
.catch(err => alert('no cards left in the deck'))

}



let div = document.getElementById('button-space');
let newDeck = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
newDeck
.then(data => {
    return data['data']['deck_id'];
}).then((id) =>{
let btn = document.createElement('button');
btn.innerText = 'Draw the card';
btn.setAttribute('data-deck-id', id);
btn.setAttribute('id', 'play');
div.append(btn);
btn.addEventListener('click', drawCard)
return
}

)








