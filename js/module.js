export const bmiDescription = (bmi) => { 
    return bmi < 18.5
    ? `Cuidado! Seu IMC é ${bmi.replace('.', ',')}, indicando que você está abaixo do peso!`
    : bmi >= 18.5 && bmi <= 25
    ? `Seu IMC é ${bmi.replace('.', ',')}, Você está no peso ideal!`
    : bmi > 25 && bmi <= 30
    ? `Cuidado! Seu IMC é ${bmi.replace('.', ',')}, indicando sobrepeso!`
    : bmi > 30 && bmi <= 35
    ? `Cuidado! Seu IMC é ${bmi.replace('.', ',')}, indicando obesidade moderada!`
    : bmi > 35 && bmi <= 40
    ? `Cuidado! Seu IMC é ${bmi.replace('.', ',')}, indicando obesidade severa!`
    : `Cuidado! Seu IMC é ${bmi.replace('.', ',')}, indicando obesidade mórbida!`;
};

export const valueColor = (bmi, value) => { 
    return bmi < 18.5
    ? (value.classList.remove (...value.classList), value.classList.add ('attention'))
    : bmi >= 18.5 && bmi <= 25
    ? (value.classList.remove (...value.classList), value.classList.add ('normal'))
    : bmi > 25 && bmi <= 30
    ? (value.classList.remove (...value.classList), value.classList.add ('attention'))
    : bmi > 30 && bmi <= 35
    ? (value.classList.remove (...value.classList), value.classList.add ('attention'))
    : bmi > 35 && bmi <= 40
    ? (value.classList.remove (...value.classList), value.classList.add ('more-attention'))
    : (value.classList.remove (...value.classList), value.classList.add ('more-attention'));
};