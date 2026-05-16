document.addEventListener('DOMContentLoaded', function () {
  fetch('../json/projects.json')
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('projects');

      data.forEach((project) => {
        const box = document.createElement('div');
        box.className = 'project-box';

        box.innerHTML = `
          <a href="${project.link}" class="project-link-overlay" target="_blank"></a>
          <div class="project-text">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
          </div>
          <div class="project-image">
            <img src="${project.image}" />
          </div>
        `;

        container.appendChild(box);
      });

      // SCROLL ANIMATION
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

      document.querySelectorAll('.project-box').forEach((el) => {
        observer.observe(el);
      });
    });
});
