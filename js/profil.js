document.addEventListener('DOMContentLoaded', () => {
  const profileData = {
    name: 'Luigi Ferraioli',
    image: '../image/me.png',
    degree: '🎓 M. Sc. Mechatronics',
    jobtitle: '🛠️ Software Engineer for Vehicle Control',
    intro: `I'm Luigi Ferraioli, a Mechatronics Engineer holding a Master's degree
              in Mechatronics, following dual Bachelor's degrees in Mechanical and
              Mechatronics Engineering.`,
  };

  const createProfile = (data) => {
    return `
        <p class="name">${data.name}</p>
        <img
          src="${data.image}"
          alt="Image of ${data.name}"
          class="profile-image"
        />
        <p class="degree">${data.degree}</p>
        <p class="jobtitle">${data.jobtitle}</p>
        <br />
        <p class="intro">${data.intro}</p>
      `;
  };

  const profileContainer = document.getElementById('profile-container');
  profileContainer.innerHTML = createProfile(profileData);
});
