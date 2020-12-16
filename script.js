'use sctrict';
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const inps = document.querySelectorAll('input[id]');
const sub = document.querySelector('input[type="submit"]');

sub.addEventListener('click', function () {
    clearTimeout(timer)
    ctx.clearRect(0, 0, 500, 500);
    let arr = [];
    for (let inp of inps) {
        inp.value[0] == '#' ? arr.push(inp.value) : arr.push(+inp.value)
    }
    draw(...arr)
})

/*let color = 'black'
let r = 80;
let R = 150;
let d = 100;
let trtPlus = 0.01
let ms = 100;*/
let timer;
let teta = 0;

function draw(color, r, R, d, tetPlus, ms) {
    console.log(ms)
    ctx.fillStyle = color;
    let x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r);
    let y = (R - r) * Math.sin(teta) - d * Math.sin((R - r) * teta / r);
    ctx.fillRect(250 + x, 250 + y, 3, 3);
    teta += tetPlus;
    timer = setTimeout(draw, ms, color, r, R, d, tetPlus, ms)
}
//draw('black', 80, 150, 100, 0.1, 100);

