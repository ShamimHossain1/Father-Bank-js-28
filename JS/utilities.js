
// js utilities for new js deposit and withdraw codes

 // Input Deposit or Withdraw Value Function

 function InputValue(inputId){
    const getInputValue = document.getElementById(inputId);
    const valueString = getInputValue.value;
    const value = parseFloat(valueString);
    getInputValue.value = '';
    return value;
 }

// Deposit , Withdraw & Balance Element Value Function

function TextElementValue (elementId){
    const getElementValue = document.getElementById(elementId);
    const ElementValueString = getElementValue.innerText;
    const ElementValue = parseFloat(ElementValueString);
    return ElementValue;

}

// Change Deposit , Withdraw & Balance Element Value Function

function NewInnerText(PreviousValue, NewValue){
    const PreValue = document.getElementById(PreviousValue);
    PreValue.innerText = NewValue;

}


