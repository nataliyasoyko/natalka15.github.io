$(function () {

    const priceTable = [
    {
        id: 1,
        cena: 19
    },
    {
        id: 2,
        cena: 24
    },
    {
        id: 3,
        cena: 27
    },
    {
        id : 4,
        cena: 22
    },
    {
        id : 5,
        cena: 30
    }]
    
    $('#pizzas').change(function() {
        let pizzaType = $(this).val()
        let spanCena = $("#cena")
        if(pizzaType == 0){
            spanCena.text("0 pln")
        }
        priceTable.forEach(item => {
            if(item.id == pizzaType){
                spanCena.text(item.cena + ' PLN')
            }    
        })
    })
    $('#pizza-order').submit(function(e){
        e.preventDefault()
        let name = $('#name').val()
        let surname = $('#surname').val()
        let street = $('#street').val()
        let hnumber = $('#hnumber').val()
        let postCode = $('#postCode').val()
        let city = $('#city').val()
    
        let pizzas = $('#pizzas').val()
    
        let sosPom = $('#sosPom').is(':checked')
        let sosCzos = $('#sosCzos').is(':checked')
    
        let rodo = $('#rodo')
        console.log(rodo)
    
        let error = []
        $('#errors').empty()
            if(name === '' ){
                error.push('Podaj imię')
            }
            if(surname === '' ){
                error.push('Podaj nazwisko')
            }
            if(street === '' ){
                error.push('Podaj ulicę')
            }
            if(hnumber === '' ){
                error.push('Podaj numer budynku')
            }
            if(postCode === '' ){
                error.push('Podaj kod pocztowy')
            }
            if(city === '' ){
                error.push('Podaj miasto')
            }
            if(pizzas === 0 ){
                error.push('Wybierz pizzę')
            }
            if(sosPom === false && sosCzos === false){
                error.push('wybierz sos')
            }
            if(rodo === '' ){
                error.push('Nie zaznaczona zgoda')
            }
            console.log(error)
            error.forEach(item => {
                let err = "<li>" + item + "</li>"
                $('#errors').append(err)
            })
    
            let zamowienie = {
                name: name + '' + surname,
                adres: city + hnumber + postCode,
                sosy: [sosCzos, sosPom]
            }
            console.log(zamowienie)
    })
       
    })