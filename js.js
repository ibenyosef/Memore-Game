var myArray = ['a1','a2','b1','b2','c1','c2','d1','d2','e1','e2','f1','f2','g1','g2','h1','h2'];

function newArr (array) {
let newArray=[];
let testArray=[]
while(newArray.length < 16){
    var r = Math.floor(Math.random() * 16);
    //console.log(r);
    if((newArray.indexOf(r) === -1)&&(!(testArray.includes(r)))){
    newArray.push(myArray[r]);
    testArray.push(r);
    createDiv(myArray[r]);
}
}
    return newArray;    
    }
//console.log(newArr(myArray));

function createDiv(id) {
  let newElement = document.createElement("div");
  let newId = id;
  let funcName="addFunc(\'"+ newId +"\')";
    newElement.setAttribute("id", newId);
    newElement.setAttribute("onClick", funcName);
  //console.log(newElement);
  let mainDiv = document.getElementById("game");
  let lastDiv = document.getElementById("last");
  mainDiv.insertBefore(newElement,lastDiv);
}
var check= [];
var firstUse = 0;
function addFunc(add) {
    firstUse++;
    if (firstUse == 1) {
        startTimer();
    }
    turnCard(add, 'flipped');
    check.push(add);
    //console.log(check);
        let first= check[0];
        let second= check[1];
    if (check.length == 2) {

        if ((first.substring(0, 1)) == (second.substring(0, 1))) {
            console.log('yes');
        }else {
            turnAgain(first,second);
        }
        check= [];
}
}

function turnCard(card,flipped) {
  let toFlip = document.getElementById(card);
  let classNew = card + flipped;
  toFlip.setAttribute("class", classNew);
    //console.log (toFlip);1
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function demo() {
  console.log('Taking a break...');
  console.log('Two second later');
}
        
async function turnAgain(first,second) {
    await sleep(2000);
    turnCard(first, '');
    turnCard(second,'');
    }

function resetGame(){
    let i=0;
    let el='';
    let currItem='';
    while(i < 16){
        currItem= myArray[i];
        el = document.getElementById(currItem);
        el.remove();
        i++;
    }
    newArr();
    startTimer();
}

function startTimer() {
    let resetDiv = document.getElementById("reset");
    let newElement = document.createElement("div");
    let mainDiv = document.getElementById("controllers");
    let newId = 'seconds-counter';
    if (document.getElementById(newId)) {
        el = document.getElementById(newId);
        el.remove();
    }
    newElement.setAttribute("id", newId);
    mainDiv.insertBefore(newElement,resetDiv);

var seconds = 0;
var ele = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    ele.innerText = seconds;
}

var cancel = setInterval(incrementSeconds, 1000);
    
}