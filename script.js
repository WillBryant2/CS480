var inputName = prompt("What is your name?");

console.log(inputName);

function setCookie(cookieName, cvalue, extime) {
    cookieName = inputName;
    const d = new Date();
    d.setTime(d.getTime() + (extime * 5 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {

    cname = cookieName;
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return "";
}
function newCookie() {
    ('<div id="newCookie">' + inputName + '</div>').appendTo("#newCookie");
    var inputName = document.cookie;
    window.alert(inputName);
}