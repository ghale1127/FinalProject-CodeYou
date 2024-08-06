  // Get the icons by their IDs
  const linkedinIcon = document.getElementById('linkedin');
  const githubIcon = document.getElementById('github');
  const emailIcon = document.getElementById('email');
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Add click event listeners
  linkedinIcon.addEventListener('click', function() {
      window.location.href = 'https://www.linkedin.com/in/dal-ghale-happy';
  });

  githubIcon.addEventListener('click', function() {
      window.location.href = 'https://github.com/ghale1127';
  });

  emailIcon.addEventListener('click', function() {
      window.location.href = 'mailto:ghaledalraj1127@gmail.com';
  });


  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }));
