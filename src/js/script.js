// Header //
// Header fancy scroll effect
window.onscroll = function () {
    const GET_HEADER = document.getElementById('header')
    const GET_A = document.getElementById('navbar-nav').getElementsByTagName("a")

    const PHONE = window.matchMedia('(max-width: 767px)')
    const TABLET = window.matchMedia('(min-width: 768px) and (max-width: 991px)')
    const LAPTOP = window.matchMedia('(min-width: 992px) and (max-width: 1199px)')
    const LARGE_DEVICE = window.matchMedia("(min-width: 1200px)")

    if (window.pageYOffset > 0) {
        GET_HEADER.style.backgroundColor = '$clr-neutral-100';
        for (var i = 0; i < GET_A.length; i++) {

            if (PHONE.matches) {
                GET_A[i].style.fontSize = "0.8em"
            } else if (TABLET.matches) {
                GET_A[i].style.fontSize = "1.2em"
            } else if (LAPTOP.matches) {
                GET_A[i].style.fontSize = "1.4em"
            } else if (LARGE_DEVICE.matches) {
                GET_A[i].style.fontSize = "1.4em"
            }
        }
    } else {
        GET_HEADER.style.backgroundColor = '$clr-neutral-200';
        for (var i = 0; i < GET_A.length; i++) {

            if (PHONE.matches) {
                GET_A[i].style.fontSize = ".9em"
            } else if (TABLET.matches) {
                GET_A[i].style.fontSize = "1.4em"
            } else if (LAPTOP.matches) {
                GET_A[i].style.fontSize = "1.6em"
            } else if (LARGE_DEVICE.matches) {
                GET_A[i].style.fontSize = "1.6em"
            }
        }
    }
}
// PageFinder
switch (window.location.pathname) {
    case "/":
        let getAHome = document.querySelector('a[href="/"]')
        getAHome.className = 'selectedLink'
        break;
    case "/about/":
        let getAAbout = document.querySelector('a[href="/about"]')
        getAAbout.className = 'selectedLink'
        break;
    case "/project/":
        let getAProject = document.querySelector('a[href="/project"]')
        getAProject.className = 'selectedLink'
        break;
    case "/archive/":
        let getAArchive = document.querySelector('a[href="/archive"]')
        getAArchive.className = 'selectedLink'
        break;
}


// Footer //
// Create all rights text
const d = new Date();
const y = d.getFullYear();
var getAllRights = document.getElementById('copyright');
var createAll = document.createElement('p');
createAll.innerHTML = '&#169; 2019 - ' + y + ' Jacob Erholt';
getAllRights.appendChild(createAll);

// Create the mail
setTimeout(function () {
    var getMailContainer = document.getElementById('mail-container')
    var createMail = document.createElement('a')
    createMail.innerHTML = 'jacob@erholt.dk'
    createMail.href = 'mailto:jacob@erholt.dk'
    createMail.target = '_blank'
    createMail.className = 'footer-focus'
    getMailContainer.appendChild(createMail)
}, 10)