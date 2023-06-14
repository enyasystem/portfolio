document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission
    alert('Form submitted successfully!');
  });

  document.querySelectorAll('a.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
  });

  const carousel = document.querySelector('#project-carousel');
  const carouselInterval = setInterval(function() {
    carousel.carousel('next');
  }, 5000);

  document.querySelectorAll('.social-icon').forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#000000';
      this.style.color = '#ffffff';
    });

    icon.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '#ffffff';
      this.style.color = '#000000';
    });
  });


  // Get the button element
  const goUpButton = document.getElementById('goUpButton');

  // Show/hide the button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      goUpButton.classList.add('show');
    } else {
      goUpButton.classList.remove('show');
    }
  });

  // Scroll to the top when the button is clicked
  goUpButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

