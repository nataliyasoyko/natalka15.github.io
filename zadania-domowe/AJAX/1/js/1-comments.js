'use strict';

fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res => res.json())
.then(res =>{
const allPost = document.getElementById('all-post')
let ulPost = document.createElement('ul')
ulPost.setAttribute("class", "all-post-ul all-post-ul_bg")
res.forEach(element => {
    let liPost = document.createElement('li')
    liPost.setAttribute("class", "all-post-li")
    liPost.innerHTML = element.name
    liPost.onclick = () =>{
        detailUser(element)
    }
    ulPost.appendChild(liPost)
});
allPost.appendChild(ulPost)
})
function detailUser(user){
    console.log('user', user)
    let h1 = createElement('h1', '', 'Dane użytkownika')
    let onePost = document.getElementById('one-post')
    onePost.innerHTML = ''
    let name = createElement('span', 'viewName', user.name)
    const allAdres = 'adres:' + ' ' + user.address.street + ' ' + user.address.suite +' ' + user.address.zipcode + ' ' + user.address.city
    let city = createElement('p', 'view-city', allAdres)
    let company = createElement ('span', 'viewCompany', user.company.name)
    onePost.appendChild(h1)
    onePost.appendChild(name)
    onePost.appendChild(city)
    onePost.appendChild(company)
}

function createElement(tag, className, val){
    let newElement = document.createElement(tag)
    newElement.setAttribute('class', className)
    newElement.innerHTML = val
    return newElement
}