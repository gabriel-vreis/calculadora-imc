const form = document.querySelector('#form'); //1° Conceito (Var, let e const).

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    const value = document.querySelector('#value');
    let description = '';

    document.querySelector('#infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
        value.classList.remove (...value.classList); // 2° Conceito (Spread Operator)
        value.classList.add ('attention');
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove (...value.classList);
        value.classList.add ('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
        value.classList.remove (...value.classList);
        value.classList.add ('attention');
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
        value.classList.remove (...value.classList);
        value.classList.add ('attention');
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
        value.classList.remove (...value.classList);
        value.classList.add ('more-attention');
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
        value.classList.remove (...value.classList);
        value.classList.add ('more-attention');
    }

    value.textContent = bmi.replace('.', ',');
    document.querySelector('#description').textContent = description;
})