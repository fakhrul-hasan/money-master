function setElementById(elementId,value){
    const targetElement = document.getElementById(elementId);
    targetElement.innerText = value;
}

function takeValue(elementId){
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldValue = inputFieldElement.value;
    const inputField = parseFloat(inputFieldValue);
    if(inputField < 0 || isNaN(inputField)){
        return alert('Please input a valid number');
    }
    return inputField;
}