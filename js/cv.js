document.addEventListener('DOMContentLoaded', () => {
  const createEntry = (entry) => {
    const yearDisplay = entry.duration
      ? `${entry.start_year} – ${entry.duration}`
      : entry.start_year === entry.end_year
      ? entry.start_year
      : `${entry.start_year} – ${entry.end_year}`;

    return `
        <div class="timeline-entry">
          <div class="year"> ${yearDisplay}</div>
          <div class="title">${entry.title}</div>
          ${
            entry.description
              ? `<div class="description">${entry.description}</div>`
              : ''
          }
        </div>
      `;
  };

  const loadAndRender = async () => {
    const [eduRes, expRes] = await Promise.all([
      fetch('../json/education.json'),
      fetch('../json/experience.json'),
    ]);
    const [educationData, experienceData] = await Promise.all([
      eduRes.json(),
      expRes.json(),
    ]);

    const sortByYearDesc = (a, b) =>
      parseInt(b.end_year || b.start_year) -
      parseInt(a.end_year || a.start_year);

    const eduContainer = document.getElementById('education');
    const expContainer = document.getElementById('experience');

    eduContainer.innerHTML =
      '<div class="timeline-heading"><h2>🎓 Education</h2></div>';
    expContainer.innerHTML =
      '<div class="timeline-heading"><h2>🛠️ Experience</h2></div>';

    educationData.sort(sortByYearDesc).forEach((entry) => {
      eduContainer.innerHTML += createEntry(entry);
    });

    experienceData.sort(sortByYearDesc).forEach((entry) => {
      expContainer.innerHTML += createEntry(entry);
    });
  };

  loadAndRender();
});
