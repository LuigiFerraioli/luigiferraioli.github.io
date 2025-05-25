document.addEventListener('DOMContentLoaded', function () {
  fetch('../json/projects.json')
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById('projects');

      data.forEach((project, index) => {
        const box = document.createElement('div');
        box.className = 'project-box';

        // Animation hinzufügen
        box.style.animation =
          'slideInRight 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';
        box.style.animationDelay = `${index * 0.3}s`;
        box.style.opacity = '0'; // Startzustand für Animation

        box.innerHTML = `
          <a href="${project.link}" class="project-link-overlay" target="_blank" rel="noopener noreferrer"></a>
          <div class="project-text">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
          </div>
          <div class="project-image">
            <img src="${project.image}" alt="Project Image" />
          </div>
        `;
        container.appendChild(box);
      });
    })
    .catch((error) => console.error('Error loading projects:', error));
});
