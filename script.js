 // Carousel functionality
 const carousel = document.querySelector('.carousel-inner');
 const items = carousel.querySelectorAll('.carousel-item');
 const prevBtn = document.querySelector('.carousel-control.prev');
 const nextBtn = document.querySelector('.carousel-control.next');
 let currentIndex = 0;

 // Create dots for carousel navigation
 const dotsContainer = document.querySelector('.carousel-dots');
 items.forEach((_, index) => {
     const dot = document.createElement('div');
     dot.classList.add('dot');
     if (index === 0) dot.classList.add('active');
     dot.addEventListener('click', () => showSlide(index));
     dotsContainer.appendChild(dot);
 });

 const dots = document.querySelectorAll('.dot');

 function showSlide(index) {
     if (index < 0) {
         currentIndex = items.length - 1;
     } else if (index >= items.length) {
         currentIndex = 0;
     } else {
         currentIndex = index;
     }
     carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
     
     // Update active dot
     dots.forEach((dot, i) => {
         dot.classList.toggle('active', i === currentIndex);
     });
 }

 prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
 nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

 // Auto-rotate carousel
 setInterval(() => showSlide(currentIndex + 1), 5000);

 // Form submission
 const form = document.querySelector('.input-form');
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     const formData = new FormData(form);
     const data = Object.fromEntries(formData.entries());
     console.log('Form submitted with data:', data);
     alert('Thank you for registering!');
     form.reset();
 });

 // Smooth scrolling for navigation links
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();
         const targetId = this.getAttribute('data-target');
         const targetElement = document.querySelector(`.${targetId}`);
         if (targetElement) {
             targetElement.scrollIntoView({
                 behavior: 'smooth'
             });
         }
     });
 });

 // Make all buttons functional
 document.querySelectorAll('a').forEach(link => {
     link.addEventListener('click', (e) => {
         if (link.getAttribute('href') === '#' && !link.classList.contains('nav-link')) {
             e.preventDefault();
             alert('This feature is coming soon!');
         }
     });
 });

 // Update the play button functionality
 const playButton = document.querySelector('.play-button');
 playButton.addEventListener('click', () => {
     alert('Video playback is coming soon!');
 });

 // Gallery and Modal functionality
 const modal = document.getElementById('imageModal');
 const modalImg = document.getElementById('modalImg');
 const galleryImages = document.querySelectorAll('.gallery-img');
 const closeBtn = document.querySelector('.close');

 galleryImages.forEach(img => {
     img.addEventListener('click', () => {
         modal.style.display = 'block';
         modalImg.src = img.src;
     });
 });

 closeBtn.addEventListener('click', () => {
     modal.style.display = 'none';
 });

 window.addEventListener('click', (event) => {
     if (event.target === modal) {
         modal.style.display = 'none';
     }
 });
 