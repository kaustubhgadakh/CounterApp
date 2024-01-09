const CountValue= document.querySelector('#counter');

function Increment(){
    // get the value from UI
    let value = parseInt(CountValue.innerText);    // parseint <- canvert string to integer values  , innerText - copy the text in UI ( 0 )
    // update the value
    value = value + 1;
    // set the value onto UI
    CountValue.innerText = value;
};

function Decrement(){
    // get the value from UI
    let value = parseInt(CountValue.innerText);
    // update the value
    value = value - 1;
    // set the value onto UI
    CountValue.innerText = value;
};