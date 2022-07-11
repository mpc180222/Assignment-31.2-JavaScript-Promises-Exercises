//Part 1.1

// let getRandomFactUrl = "http://numbersapi.com/1/trivia?json"

// let promise = axios.get(getRandomFactUrl);

// promise
// .then(data => console.log(data))
// .catch(err =>console.log(err))


//Part 1.2

let questionTwoList = document.getElementById('question2');

let getMultipleNumberUrl = "http://numbersapi.com/1,3,5,7/"

let promise2 = axios.get(getMultipleNumberUrl);

promise2
.then(data => {
    let facts = data['data']
    for(fact in facts){
    let li = document.createElement('li');
    li.innerText = facts[fact];
    questionTwoList.append(li);
    }})
.catch(err =>console.log(err))


//Part 1.3

let fourNumberFacts = []



let questionThreeList = document.getElementById('question3');
    
axios.get("http://numbersapi.com/1/trivia?json")
.then(f1 => {

let factx = f1['data'];
let lix = document.createElement('li');
lix.innerText = factx['text'];
questionThreeList.append(lix);
return axios.get("http://numbersapi.com/1/math?json")
})
.then(f2 => {

    let factx = f2['data'];
    let lix = document.createElement('li');
    lix.innerText = factx['text'];
    questionThreeList.append(lix);
    return axios.get("http://numbersapi.com/1/date?json")
    })
.then(f3 => {

        let factx = f3['data'];
        let lix = document.createElement('li');
        lix.innerText = factx['text'];
        questionThreeList.append(lix);
        return axios.get("http://numbersapi.com/1/math?json")
        })
.then(f4 => {

    let factx = f4['data'];
    let lix = document.createElement('li');
    lix.innerText = factx['text'];
    questionThreeList.append(lix);
    
    })
    
