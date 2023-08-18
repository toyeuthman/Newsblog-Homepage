"use strict";
const modalWindow = document.querySelector('.modal')
const closeModal = document.querySelector('.close')
const showModal = document.querySelector('.lock')
const overlay = document.querySelector('.overlay')

showModal.addEventListener('click', function(){
        modalWindow.style.display = "block"
        overlay.style.display = 'block'
    })
closeModal.addEventListener('click', function(){
    modalWindow.style.display = "none"
    overlay.style.display = 'none'
})