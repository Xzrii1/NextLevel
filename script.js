document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = 1;
  }, 10);

  const form = document.querySelector('.post-form');
  const postList = document.querySelector('.beranda');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const textarea = form.querySelector('textarea');
      const fileInput = form.querySelector('input[type="file"]');
      const text = textarea.value.trim();
      const file = fileInput.files[0];

      if (!text && !file) {
        alert('Tulis sesuatu atau pilih gambar dulu, bre!');
        return;
      }

      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const authorP = document.createElement('p');
      authorP.innerHTML = '<strong>NP</strong>';

      const timeP = document.createElement('p');
      timeP.classList.add('time');
      const now = new Date();
      timeP.textContent = now.toLocaleString('id-ID');

      const kontenP = document.createElement('p');
      kontenP.classList.add('konten');
      kontenP.textContent = text;

      postDiv.appendChild(authorP);
      postDiv.appendChild(timeP);
      if (text) postDiv.appendChild(kontenP);

      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          const img = document.createElement('img');
          img.src = event.target.result;
          img.alt = 'Foto postingan';
          img.classList.add('uploaded-image');
          postDiv.appendChild(img);
        }
        reader.readAsDataURL(file);
      }

      postList.appendChild(postDiv);
      textarea.value = '';
      fileInput.value = '';
    });
  }
});
