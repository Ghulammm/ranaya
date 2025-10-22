window.onload = () => {
  // Hilangkan kelas "not-loaded" setelah 1 detik (animasi awal)
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // Efek tulis huruf satu per satu
    const titles = ('I LOVE U NAYAA <3').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
  }, 1000);

  // Gambar-gambar background
  const imageSources = [
    'https://cdn.pixabay.com/photo/2018/05/20/07/26/love-3415257_1280.png', // URL 1 (Ganti jika perlu)
    'https://cdn.pixabay.com/photo/2017/08/17/14/05/flower-2651130_1280.png', // URL 2 (Ganti jika perlu)
    'https://cdn.pixabay.com/photo/2016/11/22/07/09/couple-1848529_1280.png', // URL 3 (Ganti jika perlu)
    'https://cdn.pixabay.com/photo/2017/02/16/14/08/flower-2071665_1280.png', // URL 4 (Ganti jika perlu)
    'https://cdn.pixabay.com/photo/2017/09/26/13/21/flowers-2788588_1280.png'  // URL 5 (Ganti jika perlu)
  ];

  // Buat wadah background
  const bgContainer = document.createElement('div');
  Object.assign(bgContainer.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: '-1'
  });
  document.body.appendChild(bgContainer);

  // Tambahkan gambar-gambar statis
  imageSources.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'background image';

    // Posisi dan ukuran acak
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    const randomSize = 80 + Math.random() * 120;
    const randomRotation = Math.random() * 360;

    Object.assign(img.style, {
      position: 'absolute',
      width: `${randomSize}px`,
      height: 'auto',
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      // Gambar akan muncul langsung dengan opacity 0.4
      opacity: '0.4', 
      transform: `rotate(${randomRotation}deg)`,
      // Hapus transisi opacity karena tidak diperlukan lagi
      // transition: 'opacity 2s ease' 
    });
    bgContainer.appendChild(img);

    // Hapus blok setTimeout di sini
    // Gambar akan langsung muncul saat dibuat
  });
};