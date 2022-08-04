idList = [
    "youtube",
    "discord",
    "pack",
];
urlList = [
    "https://youtube.com/c/182exe",
    "https://discord.gg/nTBKbg9gGu"
];
packList = [
    "purplesynthwave-32",
];
packUrlList = [
    "https://www.mediafire.com/file/8hvbolmsjltofxk/%2521_%25C2%25A75Purple_%25C2%25A76Synthwave_%25C2%25A72%255B32x%255D%25C2%25A77.zip/file",
];

var id = new URLSearchParams(window.location.search).get('id');
var pack = new URLSearchParams(window.location.search).get('pack');
let htmlObj = document.getElementById('display');
htmlObj.innerHTML = 'Redirecting you to a link with ID: "' + id + '"';

function redirect() {
    if (idList.includes(id) && id != 'pack') {
        let location = urlList[idList.indexOf(id)];
        window.location.replace(location);
        window.location.href(location);
    } else {
        if (id == 'pack') {
            let location = packUrlList[packList.indexOf(pack)];
            window.location.replace(location);
            window.location.href(location);
        } else {
            htmlObj.innerHTML = 'Link ID not found or invalid! You\'re being sent to the homepage.';
            let location = 'https://182exe.xyz/'
            window.location.replace(location);
            window.location.href(location);
        }
    }
}

const redirectTimeout = setTimeout(redirect, 500);