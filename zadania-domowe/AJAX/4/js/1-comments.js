function oblicz() {
    let wplata = parseInt(document.getElementById('wplata').value)
    let kapitalizacja = parseInt(document.getElementById('kapitalizacja').value)
    let lata = parseInt(document.getElementById('lata').value)
    let stopa = parseInt(document.getElementById('stopa').value)
    let wyplata = (wplata + Math.pow(1+ (stopa/100), lata/kapitalizacja))
    console.log(wyplata.toFixed(2))
}

