import { data } from './links.js';
const params = Object.fromEntries(new URLSearchParams(window.location.search));

document.querySelector('#text').classList.replace('floatdown', 'floatup');

function success(link, param1, param2) {
    document.querySelector(`#text > #message`).innerHTML = `PRESS ANY KEY TO CONTINUE...`;
    sendMessage(`> 🔹 Successfully redirected to ${link}. \n \`${param1}/${param2}\``);
};
function fail(link, param1, param2) {
    document.querySelector(`#text > #message`).innerHTML = `INVALID LINK. PRESS ANY KEY TO CONTINUE...`;
    sendMessage(`> 🔸 Failed to redirect. \n \`${param1}/${param2}\``);
};
if (Object.keys(params).length === 2) {
    var type = Object.values(params)[0];
    var index = Object.values(params)[1];
    if (data.hasOwnProperty(type) && data[type].hasOwnProperty(index)) {
        var url = data[type][index];
        success(url, type, index);
    } else {
        var url = 'https://182exe.xyz';
        fail(url, type, index);
    }
} else if (Object.keys(params).length === 1) {
    var index = Object.values(params)[0];
    if (data['social'].hasOwnProperty(index)) {
        var url = data['social'][index];
        success(url, type, index);
    } else {
        var url = 'https://182exe.xyz';
        fail(url, type, index);
    }
} else {
    fail();
    var url = 'https://182exe.xyz';
}

function sendMessage(content) {
    const request = new XMLHttpRequest();
    request.open("POST", atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3NDU1MTQ3MzQxNDg4NTQzNy9DdEVwVnI5bURBQVNfQlFQei1kRm1wYlM3OHRRTVRPZGpNWk5GcHV3bWdpR1BScUhIYTB0UjdtRkFjdUlsQmZWQmNBTA=='));
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "182exe Links",
        avatar_url: "",
        content: content
    };
    request.send(JSON.stringify(params));
};

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
