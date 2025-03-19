const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;
const rainDrops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height));

function draw() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = `${fontSize}px monospace`;

  rainDrops.forEach((y, index) => {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    const x = index * fontSize;
    context.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    context.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      rainDrops[index] = 0;
    } else {
      rainDrops[index] = y + fontSize;
    }
  });
}

setInterval(draw, 30);

window.addEventListener('resize', () => {
 
::contentReference[oaicite:8]{index=8}
 

