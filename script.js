// Pasta das imagens (correção de maiúscula)
const imageFolder = 'Imagens/';

// Lista das imagens
const images = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg']; 

const slidesContainer = document.getElementById('slides');

// Cria dinamicamente os elementos img
images.forEach(img => {
  const image = document.createElement('img');
  image.src = imageFolder + img;
  slidesContainer.appendChild(image);
});

// Controle do slide
let index = 0;
const total = images.length;

setInterval(() => {
  index++;
  if(index >= total) index = 0;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}, 4000); 

const container = document.getElementById('hearts-container');

// função para criar um coração
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.fontSize = (20 + Math.random() * 30) + 'px';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  const colors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ffc0cb'];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  container.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// criar vários corações continuamente
setInterval(createHeart, 200);

document.body.addEventListener("click", () => {
  const music = document.getElementById("music");
  music.muted = false;
  music.play();
});