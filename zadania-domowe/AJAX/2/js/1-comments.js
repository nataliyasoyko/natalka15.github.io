
//http://api.nbp.pl/api/exchangerates/tables/?format=json

$(function () {

    $('#createTable').change(function() {
    let tableNBP = $(this).val()
    console.log('createTable => tableNBP', tableNBP)
    fetch(`http://api.nbp.pl/api/exchangerates/tables/${tableNBP} ?format=json`)  
    .then(res =>res.json()) 
    .then(res=>{ 
        const notowania = res[0].rates
        let tabela = res[0].table
        console.log(tabela)
        let allRates = $('#all-rates')
        allRates.empty()
        let olElement = $('<ol></ol>')
        if(tabela == 'C') {
            console.log('res', res)
            notowania.forEach(item => {
                let walutaOpis = item.currency + ' ' + item.bid + ' ' + item.ask
                let liElement = createElement('li', walutaOpis) 
                olElement.append(liElement)
             })
             allRates.append(olElement)

        } else{
            notowania.forEach(item => {
               let walutaOpis = item.currency + ' ' + item.code + ' ' + item.mid
               let liElement = createElement('li', walutaOpis) 
               olElement.append(liElement)
            })
            allRates.append(olElement)
        }
        
     })
    })

function createElement (tag, val) {
    let element = document.createElement(tag)
    element.innerHTML = val
    return element
}



})
