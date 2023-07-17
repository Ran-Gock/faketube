// ! Для вида ! \\
let otherVideos = document.querySelector('.other-videos');
let videoContent = document.querySelector('.other-videos').innerHTML;
for(let i = 0; i < 5; i++) {
    otherVideos.innerHTML += videoContent;
}

document.querySelectorAll('.more')[1].addEventListener('mousedown', (evt) => {
    for(let i = 0; i < 5; i++) {
        otherVideos.innerHTML += videoContent;
    }
});

let searchContainer = document.querySelector('.search-input');
let searchInput = searchContainer.querySelector('input');

searchInput.addEventListener('focus', (evt) => {
    searchContainer.style.borderColor = '#00bbff';
});
searchInput.addEventListener('focusout', (evt) => {
    searchContainer.style.borderColor = '#808080';
});

let otherVideosImages = document.querySelectorAll('.other-videos li img');

for(let i = 0; i < otherVideosImages.length; i++) {
    if(otherVideosImages[i].parentElement.children[1].nodeName == 'VIDEO') {
        otherVideosImages[i].addEventListener('mouseover', (e) => {
            otherVideosImages[i].parentElement.children[1].style.display = 'block';
            otherVideosImages[i].style.display = 'none';
        });
        otherVideosImages[i].parentElement.children[1].addEventListener('mouseout', (e) => {
            otherVideosImages[i].style.display = "block";
            otherVideosImages[i].parentElement.children[1].style.display = 'none';
        });
    }
}

let menuIcons = document.querySelectorAll('.menu-icon');
let menu = document.querySelector('.nav-menu');
let dark = document.querySelector('.dark');
let body = document.querySelector('body');

menuIcons[0].addEventListener('mousedown', (evt) => {
    if(menu.getAttribute('style') === 'transform: translateX(0%);') {
        menu.setAttribute('style', 'transform: translateX(-100%);');
        dark.setAttribute('style', 'display: none;');
        body.setAttribute('style', 'overflow-y: scroll;');
    }
    else {
        menu.setAttribute('style', 'transform: translateX(0%)');
        dark.setAttribute('style', 'display: block;');
        body.setAttribute('style', 'overflow-y: hidden;');
    }
});

menuIcons[1].addEventListener('mousedown', (evt) => {
    if(menu.getAttribute('style') === 'transform: translateX(0%);') {
        menu.setAttribute('style', 'transform: translateX(-100%);');
        dark.setAttribute('style', 'display: none;');
        body.setAttribute('style', 'overflow-y: scroll;');
    }
    else {
        menu.setAttribute('style', 'transform: translateX(0%);');
        dark.setAttribute('style', 'display: block;');
        body.setAttribute('style', 'overflow-y: hidden;');
    }
});

dark.addEventListener('mousedown', (evt) => {
    if(menu.getAttribute('style') === 'transform: translateX(0%);') {
        menu.setAttribute('style', 'transform: translateX(-100%);');
        dark.setAttribute('style', 'display: none;');
        body.setAttribute('style', 'overflow-y: scroll;');
    }
});

let main = menu.querySelector('.main');

main.addEventListener('mouseover', (evt) => {
    main.setAttribute('style', 'overflow: auto;');
})
main.addEventListener('mouseout', (evt) => {
    main.setAttribute('style', 'overflow: hidden;');
})

let desc = document.querySelector('.description');
let descText = desc.querySelector('span');
let collapse = desc.querySelector('.collapse');
let descOpen = false;

desc.addEventListener('mousedown', (evt) => {
    if(!descOpen) {
        descText.setAttribute('style', '');
        descOpen = !descOpen;
    }
});

collapse.addEventListener('click', (evt) => {
    descText.setAttribute('style', 'overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;');
    descOpen = !descOpen;
});

desc.addEventListener('mouseover', (evt) => {
    if(descOpen) {
        desc.setAttribute('style', 'background-color: #393939;');
    }
    else {
        desc.setAttribute('style', 'cursor: pointer; background-color: #5e5e5e;');
    }
});

desc.addEventListener('mouseout', (evt) => {
    if(!descOpen) {
        desc.setAttribute('style', 'background-color: #393939;');
    }
});

let commentsCount = 1024;
let commentsCountEl = document.querySelector('.comments .count');
commentsCountEl.textContent = commentsCount + " комментариев";