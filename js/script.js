import {bmiDescription, valueColor} from "./module.js"; //ES6 Modules

const form = document.querySelector('#form'); //Var, let e const 

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const value = document.querySelector('#value');
    const description = document.querySelector('#description');

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    document.querySelector('#infos').classList.remove('hidden');

    valueColor(bmi,value);
    value.textContent = bmi.replace('.', ',');
    description.textContent = bmiDescription(bmi);
})