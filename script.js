// 🎄 Pisca-pisca
const colors = ['#ff4d4d', '#ffd93d', '#4ddcff', '#b96cff', '#4dff88'];

setInterval(() => {
    document.querySelectorAll('.light').forEach(light => {
        light.style.background =
            colors[Math.floor(Math.random() * colors.length)];
    });
}, 900);

// ❄️ Neve caindo como chuva
function criarNeve() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.innerHTML = '❄';

    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.fontSize = (Math.random() * 10 + 10) + 'px';
    snow.style.opacity = Math.random();
    snow.style.animationDuration = (Math.random() * 3 + 3) + 's';

    document.body.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 6000);
}

setInterval(criarNeve, 200);
