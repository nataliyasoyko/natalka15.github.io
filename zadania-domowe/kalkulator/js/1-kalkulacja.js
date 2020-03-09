function get(num) {
    console.log(num)
    document.getElementById('inputText').value+=num
    //ten sam zapis: document.getElementById('inputText').value = document.getElementById('inputText').value + num
}
function zliczanie () {
    let dzialanieDoWykonania = document.getElementById('inputText')
    let wartoscPobranaDoLiczenia = document.getElementById('inputText').value
    dzialanieDoWykonania.value = eval(wartoscPobranaDoLiczenia)
}
function clean (){
    document.getElementById('inputText').value = ''
}
document.getElementById('clean').addEventListener('click', clean)

let number = Math.floor (Math.random() *100)
fetch(`https://jsonplaceholder.typicode.com/posts/${number}`) 
// `` dla dynamicznej podmiany
    .then(res =>res.json()) 
    .then(res=>{ 
        document.getElementById('inputText').value = res.title
    console.log(response); 
}).catch(err=>{
    console.log(err)
})
