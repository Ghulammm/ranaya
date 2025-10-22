const title = document.querySelector('.title')
const text = `I Have Something For`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});

// ✅ Tambahkan slot untuk gambar di sebelah tulisan
const img = document.createElement('img');
img.src = 'naya2.png'; // ganti dengan path gambarmu
img.alt = 'icon';
img.style.width = '80px';
img.style.height = '80px';
img.style.objectFit = 'contain';
img.style.marginLeft = '0.5rem';
title.appendChild(img);

