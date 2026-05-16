document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('../json/about.json');
  const data = await res.json();

  const { profile, roles, links } = data;

  const about = document.getElementById('about-placeholder');

  const linksHtml = links
    .map(
      (link) => `
        <li>
          <a href="${link.url}" target="_blank" rel="noopener">
            <img src="${link.icon}" alt="${link.name}" class="social-icon">
          </a>
        </li>`
    )
    .join('');

  about.innerHTML = `
    <div class="aboutme-box">

      <!-- INTRO -->
      <div class="about-intro">
        <p>${profile.intro.replace(/\n/g, '<br>')}</p>
      </div>

      <!-- MAIN GRID -->
      <div class="about-grid">

        <!-- LEFT: Degrees -->
        <div class="about-column">
          <h3>Degrees</h3>
          <div class="degrees">
            <p>${profile.degree}</p>
            <p>${profile.degree_2}</p>
            <p>${profile.degree_3}</p>
            <p>${profile.degree_4}</p>
          </div>
        </div>

        <!-- RIGHT: Roles -->
        <div class="about-column">
          <h3>Focus Areas</h3>
          <div class="roles">
            ${roles
              .map(
                (r, i) =>
                  `<p class="role-item" style="animation-delay:${i * 0.2}s">${r}</p>`
              )
              .join('')}
          </div>
        </div>

      </div>

      <!-- LINKS -->
      <div class="about-links">
        <h3>Connect</h3>
        <ul class="social-links">
          ${linksHtml}
        </ul>
      </div>

    </div>
  `;

  // Animation Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.35, rootMargin: '0px 0px -15% 0px' }
  );

  document
    .querySelectorAll('.about-intro, .degrees p, .role-item, .about-column h3')
    .forEach((el) => observer.observe(el));
});
