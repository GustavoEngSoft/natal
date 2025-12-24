// Pisca-pisca mudando cores
setInterval(() => {
    document.querySelectorAll('.light').forEach(light => {
        light.style.background =
            `hsl(${Math.random() * 360}, 100%, 60%)`;
    });
}, 800);

// Criar neve
function criarNeve() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.innerHTML = '❄';

    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = (Math.random() * 10 + 10) + 'px';

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 5000);
}

setInterval(criarNeve, 300);
