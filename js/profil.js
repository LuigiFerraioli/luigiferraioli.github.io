document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('../json/profil.json');
  const data = await res.json();

  const { name, image, roles } = data;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 1500;

  const createProfile = (data) => {
    return `
      <p class="name">${data.name}</p>
      <img
        src="${data.image}"
        alt="Image of ${data.name}"
        class="profile-image"
      />
      <p class="degree">
        <span id="role-text"></span><span class="cursor">|</span>
      </p>
    `;
  };

  const profileContainer = document.getElementById('profile-container');
  profileContainer.innerHTML = createProfile({ name, image });

  const roleText = document.getElementById('role-text');

  function type() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      roleText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
        return;
      }
    } else {
      roleText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
});
