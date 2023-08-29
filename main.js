import { data } from './links.js';
const params = Object.fromEntries(new URLSearchParams(window.location.search));

document.querySelector('#text').classList.replace('floatdown', 'floatup');

function success(link, param1, param2) {
    document.querySelector(`#text > #message`).innerHTML = `PRESS ANY KEY TO CONTINUE...`;
};
function fail(link, param1, param2) {
    document.querySelector(`#text > #message`).innerHTML = `INVALID LINK. PRESS ANY KEY TO CONTINUE...`;
};
if (Object.keys(params).length === 2) {
    var type = Object.values(params)[0];
    var index = Object.values(params)[1];
    if (data.hasOwnProperty(type) && data[type].hasOwnProperty(index)) {
        var url = data[type][index];
        success(url, type, index);
    } else {
        var url = 'https://182exe.online';
        fail(url, type, index);
    }
} else if (Object.keys(params).length === 1) {
    var index = Object.values(params)[0];
    if (data['social'].hasOwnProperty(index)) {
        var url = data['social'][index];
        success(url, type, index);
    } else {
        var url = 'https://182exe.online';
        fail(url, type, index);
    }
} else {
    window.location.assign("https://182exe.online" + window.location.pathname)
    var url = 'https://182exe.online';
}

function sendMessage(success, directory, destination) {
    const request = new XMLHttpRequest();
    request.open("POST", "please-stop-hecking-my-webhook.net");
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        username: "182exe Links",
        avatar_url: "https://raw.githubusercontent.com/182exe/links/main/icon.png",
        embeds: [ generateEmbed(success, directory, destination) ]
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

function generateEmbed(success, directory, destination) {
    return {
        "title": "Successful Redirect",
        "description": "*Click to visit targetted url...*",
        "url": destination,
        "timestamp": new Date(),
        get color() { return success ? "0x00FFFF" : "0xFF00FF" },
        footer: {
            "icon_url": "https://raw.githubusercontent.com/182exe/links/main/icon.png",
            "text": "182exe's Redirecting Redux",
        },
        "fields": [
            {
                "name": "Link Directory",
                "value": `\`/${directory}\``
            },
            {
                "name": "Destination URL",
                get value() { return success ? `\`${destination}\`` : "*No link found at that directory.*"}
            }
        ]
    }
}
