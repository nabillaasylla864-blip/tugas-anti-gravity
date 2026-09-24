document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Tutup menu navigasi saat link diklik (khusus tampilan mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // 2. Form Contact Handler (Simulasi pengiriman pesan)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih, pesan Anda telah terkirim! M. Fahri Alfando akan segera menghubungi Anda.');
      contactForm.reset();
    });
  }

  // 3. Smooth Scroll Navbar Active State Highlights
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').includes(current)) {
        item.classList.add('active');
      }
    });
  });
});
