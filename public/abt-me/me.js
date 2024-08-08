  // Get the icons by their IDs
  const linkedinIcon = document.getElementById('linkedin');
  const githubIcon = document.getElementById('github');
  const emailIcon = document.getElementById('email');
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Add click event listeners
  linkedinIcon.addEventListener('click', function() {
      try {
          window.location.href = 'https://www.linkedin.com/in/dal-ghale-happy';
      } catch (error) {
          console.error('Error navigating to LinkedIn:', error);
          alert('Failed to navigate to LinkedIn. Please try again later.');
      }
  });

  githubIcon.addEventListener('click', function() {
      try {
          window.location.href = 'https://github.com/ghale1127';
      } catch (error) {
          console.error('Error navigating to GitHub:', error);
          alert('Failed to navigate to GitHub. Please try again later.');
      }
  });

  emailIcon.addEventListener('click', function() {
      try {
          window.location.href = 'mailto:ghaledalraj1127@gmail.com';
      } catch (error) {
          console.error('Error opening email client:', error);
          alert('Failed to open email client. Please try again later.');
      }
  });

  hamburger.addEventListener("click", () => {
      try {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
      } catch (error) {
          console.error('Error toggling hamburger menu:', error);
          alert('Failed to toggle menu. Please try again later.');
      }
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
      try {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
      } catch (error) {
          console.error('Error removing active class:', error);
          alert('Failed to close menu. Please try again later.');
      }
  }));