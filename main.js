import { data } from './links.js';
const params = Object.fromEntries(new URLSearchParams(window.location.search));
let assign = false;
let url = ``;

document.querySelector('#text').classList.replace('floatdown', 'floatup');

function success(link) {
    document.querySelector(`#text > #message`).innerHTML = `PRESS ANY KEY TO CONTINUE...`;
};
function fail(link) {
    document.querySelector(`#text > #message`).innerHTML = `INVALID LINK. PRESS ANY KEY TO CONTINUE...`;
};
if (Object.keys(params).length === 2) {
    let type = Object.values(params)[0];
    let index = Object.values(params)[1];
    if (data.hasOwnProperty(type) && data[type].hasOwnProperty(index)) {
        url = data[type][index];
        success(url);
    } else {
        url = 'https://182exe.online';
        fail(url);
    }
} else if (Object.keys(params).length === 1) {
    var index = Object.values(params)[0];
    if (data['social'].hasOwnProperty(index)) {
        url = data['social'][index];
        success(url);
    } else {
        url = 'https://182exe.online';
        fail(url);
    }
} else {
    assign = true
    success(url)
    url = 'https://182exe.online';
}

function redirectSequence(assign) {
    document.body.classList.add('blackness');
    [...document.querySelectorAll('.bgi')].forEach(element => {
        element.classList.add('blackness');
    })
    const animated = document.querySelectorAll('.floatup');
    [...animated].forEach(element => {
        element.classList.replace('floatup', 'floatdown');
    });
    setTimeout(() => {
        if (assign) {
            window.location.assign("https://182exe.online" + window.location.pathname)
        } else {
            window.location.replace(url);
        }
    }, 1000);
};

setTimeout(() => {
    window.addEventListener('keypress', () => { redirectSequence(assign) });
    window.addEventListener('touchstart', () => { redirectSequence(assign) })
    window.addEventListener('click', () => { redirectSequence(assign) })
}, 1000);