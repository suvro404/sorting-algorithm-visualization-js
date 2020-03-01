const sortingView = document.querySelector("#sorting-view");
const sound = document.getElementById("sorting-sound");

var numArray = [];
var arrayMaxValue = 100;
var arraySize = 50;
var sortingContainer = document.getElementById("sorting-view");
var alogoSelect = document.getElementById("algo-options");
var delayInMs = 50;
var inputSize = document.getElementById("input-size");
var delayInput = document.getElementById("delay-input");
var orderSelect = document.getElementById("order-options");


var algorithms = [
    {name:'Insertion', value: 'insertion'},
    {name:'Selection', value: 'selection'},
    {name:'Bubble', value: 'bubble'}
];

var orders = [
    {name: 'Random', value: 'random'},
    {name: 'Reversed', value: 'reversed'},
    {name: 'Sorted', value: 'sorted'}
];

function setAlgoSelectOptions(algorithms) {
    for(var i=0; i<algorithms.length; i++) {
        alogoSelect.options[alogoSelect.options.length] = new Option(algorithms[i].name, algorithms[i].value);
    }
}

function setOrderSelectOptions(orders) {
    for(var i=0; i<orders.length; i++) {
        orderSelect.options[orderSelect.options.length] = new Option(orders[i].name, orders[i].value);
    }
}

function setTitle() {
    var currentAlgo = alogoSelect.options[alogoSelect.selectedIndex].text;
    document.getElementById('algo-name').innerText = currentAlgo;
}

function setDelay() {
    var delayMsg = document.getElementById("delay-ms");
    delayMsg.innerHTML = delayInMs;
}

function createBars(arraySize) {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    numArray = Array.from({length: arraySize}, () => Math.floor(Math.random() * (arrayMaxValue+1)));
    sortingContainer.innerHTML = "";
    var currentOrder = orderSelect.options[orderSelect.selectedIndex].value;
    if(currentOrder == "reversed") {
        numArray = Array.from(numArray).sort((a, b) => b - a);
    } else if(currentOrder == "sorted") {
        numArray = Array.from(numArray).sort((a, b) => a - b);
    }
    for(var i=0; i<numArray.length; i++) {
        var bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (windowHeight * numArray[i] * 0.006) + 'px';
        bar.style.width = (((windowWidth * 0.80)/arraySize)-1) + 'px';
        var barTitle = document.createElement("label");
        barTitle.classList.add("bar-title");
        barTitle.innerHTML = numArray[i];
        bar.appendChild(barTitle);
        sortingContainer.appendChild(bar);
    }
    // console.log(bar.style.height);
}

setAlgoSelectOptions(algorithms);
setOrderSelectOptions(orders);
setTitle();
setDelay();
createBars(arraySize);