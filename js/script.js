"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // Timer
    function currentDom() {
        let timeOfYear = document.querySelector('#timeofyear');
        let timeday = timeOfYear.querySelector('#day');
        let timemath = timeOfYear.querySelector('#math');
        let timeYear = timeOfYear.querySelector('#year');
        function currentTime() {
            let today = new Date();
            timeday.innerHTML = timeNol(String(today.getDate()).padStart(2, '0'));
            timemath.innerHTML = String(today.getMonth() + 1).padStart(2, '0');
            timeYear.innerHTML = today.getFullYear();

        }
        setInterval(currentTime, 1000);
    }
    currentDom()

    function totalDom() {
        let hour = document.querySelector('#hour');
        let minutes = document.querySelector('#minutes');
        let secunts = document.querySelector('#secunts');

        function endTime() {
            hour.innerHTML = timeNol(new Date().getHours())
            minutes.innerHTML = timeNol(new Date().getMinutes())
            secunts.innerHTML = timeNol(new Date().getSeconds())
        }
        setInterval(endTime, 1000);
    }
    totalDom();

    function timeNol(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`
        }
        else {
            return num
        }
    }


    // Madal

    function madalOpen() {
        const madal = document.querySelector('.madal');
        if (madal.classList.contains('delete')) {
            madal.classList.remove('delete')
            document.body.style.overflow = 'hidden'
        }
    }

    function hiddenMadal(item) {
        let hiddenMadal = document.querySelector('.hidden__madal');
        hiddenMadal.addEventListener('click', () => {
            madal.classList.add('delete');
            document.body.style.overflow = ''
            add(item)
        })
    }

    function names(params) {
        params.classList.remove('read__bomdod')
    }
    function add(elament) {
        elament.classList.add('read__bomdod');
    }

    let rezult = document.querySelector('.nomoz__time');

    rezult.addEventListener('click', (e) => {
        let target = e.target;
        let id = target.id
        if (id == 'btnBomdod') {
            madalOpen()
            hiddenMadal(bomdodText)
            names(bomdodText)
        } else if (id == 'btnPeshin') {
            madalOpen()
            hiddenMadal(peshinText)
            names(peshinText)
        } else if (id == 'btnAsr') {
            madalOpen()
            hiddenMadal(asrText)
            names(asrText)
        } else if (id == 'btnShom') {
            madalOpen()
            hiddenMadal(shomText)
            names(shomText);
        } else if (id == 'btnXufton') {
            madalOpen()
            hiddenMadal(xuftonText)
            names(xuftonText)
        } else if (id == 'btnVitr') {
            madalOpen()
            hiddenMadal(vitrText)
            names(vitrText)

        }
    })


});