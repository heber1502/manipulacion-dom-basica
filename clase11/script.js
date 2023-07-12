
const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result")

//form.addEventListener('submit',sumarInputValues);


//function sumarInputValues(event) {
/*const num = Number(input1.value) + Number(input2.value); suma
    console.log(num)*/
    /*console.log(parseInt(input1.value) + parseInt(input2.value)); suma*/
    //event.preventDefault()
    //const sumaInputs = input1.value + input2.value; /*Recuerda que es una concatenacion*/
    //pResult.innerHTML = "Resultado: " + sumaInputs;
//}

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event) {
  
        const sumaInputs = input1.value + input2.value; /*Recuerda que es una concatenacion*/
        pResult.innerHTML = "Resultado: " + sumaInputs;
    }
    