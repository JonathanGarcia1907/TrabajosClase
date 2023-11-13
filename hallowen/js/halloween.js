/*******************************************
 * js functions for hallowen exercise
 * author: Jonathan Garcia
 * date: novemver 2023
 * commment: my first exercise with js functions
 *************************************************/

function show(element){
    document.getElementById(element).style.visibility="visible" ;
}

function hide(element){
    document.getElementById(element).style.visibility="hidden" ;
}

function sound(element){
    ducument.getElementById(element).play() ;
}

function silence(element){
    ducument.getElementById(element).pause() ;
}