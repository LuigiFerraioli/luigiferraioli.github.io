document.addEventListener('DOMContentLoaded', () => {
  fetch('../json/footer.json')
    .then((res) => res.json())
    .then((data) => {
      const footer = document.getElementById('footer-placeholder');

      // Erstellen der Links mit Icons
      const linksHtml = data.links
        .map(
          (link) =>
            `<li><a href="${link.url}" target="_blank" rel="noopener"><img src="${link.icon}" alt="${link.name}" class="social-icon"></a></li>`
        )
        .join('');

      footer.innerHTML = `
        <footer class="site-footer">
          <div class="footer-content">
            <ul class="social-links">
              ${linksHtml}
            </ul>
            <div class="copyright">&copy; 2025 Luigi Ferraioli</div>
          </div>
        </footer>
      `;
    });
});
