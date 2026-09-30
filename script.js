const card = document.getElementById('card');

let isHovered = false;

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

let time = 0;


// Gerakan mengikuti mouse
window.addEventListener('mousemove', (e) => {

  isHovered = true;

  targetX =
    (window.innerWidth / 2 - e.clientX) / 12;

  targetY =
    (window.innerHeight / 2 - e.clientY) / 12;

});


// Ketika mouse keluar dari halaman
window.addEventListener('mouseleave', () => {

  isHovered = false;

});


// Animasi kartu
function autoAnimate() {

  time += 0.025;


  // Animasi otomatis jika mouse tidak digunakan
  if (!isHovered) {

    targetX = Math.sin(time) * 12;

    targetY =
      Math.cos(time * 0.8) * 8;

  }


  // Gerakan dibuat lebih halus
  currentX +=
    (targetX - currentX) * 0.08;

  currentY +=
    (targetY - currentY) * 0.08;


  // Efek melayang
  const floatOffset =
    Math.sin(time * 1.5) * 8;


  card.style.transform =
    `translateY(${floatOffset}px)
     rotateY(${currentX}deg)
     rotateX(${currentY}deg)`;


  requestAnimationFrame(autoAnimate);
}


// Jalankan animasi
autoAnimate();