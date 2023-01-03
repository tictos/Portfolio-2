let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    if (menu.classList.contains('bx-menu')) {
        menu.classList.replace('bx-menu', 'bx-x');
        navbar.classList.toggle('active');
    } else {
        menu.classList.replace('bx-x', 'bx-menu');
        navbar.classList.remove('active')
    }
    
    
    
    //navbar.classList.toggle('active');
    //menu.classList.replace('bx-menu', 'bx-x');
}



// dark mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }

    else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}