import { data } from './links.js';
const params = Object.fromEntries(new URLSearchParams(window.location.search));

document.querySelector('#text').classList.replace('floatdown', 'floatup');

function success() {
    document.querySelector(`#text > #message`).innerHTML = `PRESS ANY KEY TO CONTINUE...`;
};
function fail() {
    document.querySelector(`#text > #message`).innerHTML = `INVALID LINK. PRESS ANY KEY TO CONTINUE...`;
}
if (Object.keys(params).length === 2) {
    var type = Object.values(params)[0];
    var index = Object.values(params)[1];
    if (data.hasOwnProperty(type) && data[type].hasOwnProperty(index)) {
        success();
        var url = data[type][index];
    } else {
        fail();
        var url = 'https://182exe.xyz';
    }
} else if (Object.keys(params).length === 1) {
    var index = Object.values(params)[0];
    if (data['social'].hasOwnProperty(index)) {
        success();
        var url = data['social'][index];
    } else {
        fail();
        var url = 'https://182exe.xyz';
    }
} else {
    fail();
    var url = 'https://182exe.xyz';
}

function redirectSequence() {
    document.body.classList.add('blackness');
    [...document.querySelectorAll('.bgi')].forEach(element => {
        element.classList.add('blackness');
    })
    const animated = document.querySelectorAll('.floatup');
    [...animated].forEach(element => {
        element.classList.replace('floatup', 'floatdown');
    }); 
    setTimeout(() => {
        window.location.replace(url);
    }, 1000);
};

setTimeout(() => {
    window.addEventListener('keypress', () => { redirectSequence() });
    window.addEventListener('touchstart', () => { redirectSequence() })
    window.addEventListener('click', () => { redirectSequence() })
}, 1000);