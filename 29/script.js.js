const lantern = document.querySelector('.lantern');
let angle = 0;
let isPaused = false;

function rotateLantern() {
  if (!isPaused) {
    angle += 0.3;
    lantern.style.transform = `rotateY(${angle}deg)`;
  }
  requestAnimationFrame(rotateLantern);
}

lantern.addEventListener('mouseenter', () => {
  isPaused = true;
});

lantern.addEventListener('mouseleave', () => {
  isPaused = false;
});

rotateLantern();
