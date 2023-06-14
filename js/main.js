document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission
    alert('Form submitted successfully!');
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
