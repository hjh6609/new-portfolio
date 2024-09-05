let isBlackMode = false; // 초기 상태는 화이트 모드

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleBackgroundColor() {
    const icon = document.querySelector('.icon');
    const menuLinks = document.querySelectorAll('.menu-links');
    
    if (isBlackMode) {
        document.body.style.backgroundColor = 'white';
        icon.classList.remove('black-mode');
        icon.classList.add('white-mode');

        // 메뉴 링크 색상 설정
        menuLinks.forEach(menu => {
            menu.style.backgroundColor = 'white';
            menu.style.color = 'black';
        });
    } else {
        document.body.style.backgroundColor = 'black';
        icon.classList.remove('white-mode');
        icon.classList.add('black-mode');

        // 메뉴 링크 색상 설정
        menuLinks.forEach(menu => {
            menu.style.backgroundColor = 'black';
            menu.style.color = 'white';
        });
    }
    isBlackMode = !isBlackMode; // 상태를 토글
}