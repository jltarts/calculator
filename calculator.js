//set up the variables
const output = document.querySelector('#currentOutput');
const resultView = document.querySelector('#priorOutput');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('#decimal');
const back = document.querySelector('#delete');
//assigning empty/null values to variables
var priorNum = '';
var currentNum = '';
var priorOperation = '';
var result = null;


//functions
//last minute fun
$('.calculator').hide();
$('.calculator').slideDown(1800);


//passing a value to be held and to save the operator type
saveNum = function (e) {
    if (output.textContent === operators) {
        priorOperation = e;
    }
    else (output.textContent === numbers || operators); {
        e = parseFloat(output.textContent.slice(0, -1));
        priorNum = e;

    }

    // 
    console.log('priorNum', priorNum, 'currentNum', currentNum, 'event', e);
};

//clearing the display areas
function clearAll() {
    priorNum = '';
    currentNum = '';
    result = '';
    output.textContent = '';
    resultView.textContent = '';
};


//listening for numbers
numbers.forEach((number) => {
    number.addEventListener('click', function (e) {
        //creating the click event variables
        priorNum += e.target.dataset.num;
        output.textContent = priorNum;
        //testing testing 
        // console.log('output', output,);
    });
});

//listening for the operators to be clicked
operators.forEach((operator) => {
    operator.addEventListener('click', function (e) {
        //pull the value from the operator buttons
        var operator = e.target.textContent;

        //can I concatenate operators and numbers?
        output.textContent += operator;
        parseFloat(priorNum += operator);
        //can I store the value before the operator with the priorNum?
         saveNum();

         //and I broke it after this LOL
        // //more testing
        console.log('prior number', priorNum);
    });
});

// evaluations, clear, equals


//calculate function
//this does not work
calculations = function () {
    priorNum = parseFloat(priorNum);
    currentNum = parseFloat(currentNum);
    result = parseFloat(result);

    switch (saveNum(operators)) {
        case 'add':
            result = priorNum + currentNum;
            break;
        case 'minus':
            result = priorNum - currentNum;
            break;
        case 'multiply':
            result = priorNum * currentNum;
            break;
        case 'divide':
            result = priorNum / currentNum;
            break;
    }
    //resetting the previous number
    priorNum = 0;
    currentNum = result;
    console.log('result', result);
};


//event listener for clear button data
clear.addEventListener('click', function (e) {
    clearAll();
});

// add backspace function/event listener ---this did not work correctly
back.addEventListener('click', function (e) {
    if (output.textContent === numbers || operators)

        console.log('event', e);
});

equal.addEventListener('click', function (e) {
    calculations(); //need a function to evaluate the math

    resultView.textContent = parseFloat(result);
    console.log('equals event', e);
});




//if operators are double clicked disallow?


//make the font size go down at 18 characters?
//this didn't work

// var maxChar = 17;
// if(parseInt(output.innerHTML.length)  >= maxChar){
//     output.style.fontSize = '18px'; 

// }


//trying to disallow the decimal from being used twice
// function removeDec(e) {
//     var dec = decimal.dataset.num;}



