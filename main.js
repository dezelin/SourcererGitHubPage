// Screenshot lightbox
(function () {
  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var img = dialog.querySelector('img');

  document.querySelectorAll('.shot').forEach(function (shot) {
    shot.addEventListener('click', function () {
      var src = shot.querySelector('img');
      img.src = src.currentSrc || src.src;
      img.alt = src.alt;
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', function () { dialog.close(); });
})();

// Footer year
(function () {
  var el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
})();
