let crsr = document.querySelector('.cursor');
let main = document.querySelector('#main');

main.addEventListener('mousemove', (e) => {
    crsr.style.left = e.x+'px'
    crsr.style.top = e.y+'px'
})