const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters - taken from the original Matrix code
const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = Array.from({ length: columns }, () => 1);

// Draw the characters
function draw() {
  // Black background with opacity
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Green text
  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px monospace`;

  // Loop over drops
  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize
::contentReference[oaicite:6]{index=6}
 

