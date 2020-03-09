"use strict";

/*
wersja 1 
*/
//$( document ).ready( function() {
  // kod do wykonania
  //} ); 
  // wstrzyma wykonywania kodu, dopóki dokument nie będzie zaladowany
  //jak body w html



/*  wersja 2  skrócona wersja poprzedniej wersji*/

$(function () {

  let paragraf1 = $("p.paragraf")
  let para1 = $('#para1')
  let paragra = $('p')
  let spany = $('span')
  let par1 = $('#paragraf1')
  let przycisk = $('#fadeOut')
  przycisk.css({
    "padding-top": "15px",
    "font-size": '25px',
    'color': 'hotpink'
  })
  let h1 = $('#first')
  let neW = $("<ul></ul>")
  for(let i=0; i<25; i++){
    let liElement = $('<li></li>')
    liElement.text(i+1)
    neW.append(liElement)
  }
  //neW.append("<li>hello</li><li>hej</li><li>hi</li><li>bye</li>")
  // h1.text('oto zmieniony nagłówek')
  // h1.html('<p>oto zmieniony2 nagłówek</p>')
  h1.append(neW)
  h1.prepend("ijtererf")
  h1.after("po h1")
  h1.before("<h1>przed h1</h1>")
  console.log(paragraf1)
  console.log(para1)
  console.log(paragra)
  console.log(spany)
  console.log(par1)
  console.log(przycisk)
  console.log(h1)
  console.log(neW)
  // console.log("$('#first')", $('#first'))
  // console.log(" $('p.paragraf')", $('p.paragraf'))
  // $('p.paragraf')
  // .hide('slow')
  // .show(3000)
  // .css({background: 'red',color: "black"})

  // console.log(" $('#idDiv p.paragraf2')", $('#idDiv p.paragraf2'))
  // console.log("span", $(".nowydiv span"))
  // let allP = $("p");
//   // console.log(allP);
// let nowyDiv = $('.nowydiv')
//   $('.nowydiv').append(" append DDDDDDDDDDDDDDDDDDDDDDDDDD")
//   nowyDiv.prepend("prepend() ffffffffffffffffffff")
//   nowyDiv.after("<p>after() dddddderfsdfgdsagsa</p>")
  
//   // nowyDiv.css({
//   //   "backgroundColor" : "red",
//   //   "color": "red"
//   // })
//   nowyDiv.addClass("kdjfjdskfjsjkf")
// $("button").click(function () {
//   $('p').each(function () {
//     $(this).text("wow")
//   })
// })
// nowyDiv.on({
// 'click' : function () {
// console.log("click")
// },
// "dblclick" : function () {
//   alert("dblclikc")
// }


// })


// $(".target").change(function () {
// console.log($(this).val())

// // })

// $('#hide').click(function (){
//   $(".nowydiv").slideUp(2000)
// })

// $("#fadeOut").click(function () {
//   $("#idDiv").fadeOut(2000)
// })

// console.log($("#spanMain"))


//   $("span").animate({"color": "red"}, 2000);

 });
