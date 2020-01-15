/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
/* exported myFunction */

var zoekbutton = document.querySelector('.burger');
var zoekveld = document.querySelector('.linkjes');

function show(){
    zoekveld.classList.toggle('show-search');
}

zoekbutton.addEventListener('click', show);

