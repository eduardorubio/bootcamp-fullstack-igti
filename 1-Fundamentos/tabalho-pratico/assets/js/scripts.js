window.addEventListener('load', () => {
    inicialize();
});

function inicialize(){
    const rangeRed = document.querySelector('#rangeRed');
    const rangeGreen = document.querySelector('#rangeGreen');
    const rangeBlue = document.querySelector("#rangeBlue");

    rangeRed.addEventListener('input', rgbProcess);
    rangeGreen.addEventListener('input', rgbProcess);
    rangeBlue.addEventListener('input', rgbProcess);

    rgbProcess();
}

function rgbProcess(){
    const rangeRed = document.querySelector('#rangeRed');
    const rangeGreen = document.querySelector('#rangeGreen');
    const rangeBlue = document.querySelector("#rangeBlue");
    const textRed = document.querySelector('#textRed');
    const textGreen = document.querySelector('#textGreen');
    const textBlue = document.querySelector("#textBlue");
    const rgbResult = document.querySelector('.rgb-result');

    const red = rangeRed.value;
    const green = rangeGreen.value;
    const blue = rangeBlue.value;

    textRed.value = red;
    textGreen.value = green;
    textBlue.value = blue;

    rgbResult.style.backgroundColor = `rgb(${red},${green},${blue})`; 

}