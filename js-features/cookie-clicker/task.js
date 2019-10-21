const clicker_counter = document.getElementById('clicker_counter');
const image = document.getElementById('cookie');
const shrink - function() {
    image.width = 200;
}

function counterClick() {
    clicker_counter.textContent++;
    image.width = 300;
    setTimeout(shrink, 100);
}

Image.onclick = counterClick