'use strict';
function pobierz(){

    fetch(`https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php`)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
    let dane = document.createElement('div')
    dane.setAttribute('id', 'dane-programisty')
    console.log(dane)
    dane.innerHTML = "Imie: " + res.imie + " "+ "Nazwisko: " + res.nazwisko;
    document.body.appendChild(dane); 
    })}
    
    