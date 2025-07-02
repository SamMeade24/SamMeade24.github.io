document.addEventListener('DOMContentLoaded', () => {
  // --- Homepage Project Filtering ---
  const projectButtons = document.querySelectorAll('.filter-tabs button');
  const projects = document.querySelectorAll('.featured-project');

  if (projects.length > 0) {
    projectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
          const category = project.getAttribute('data-category');
          if (filter === 'all' || (category && category.includes(filter))) {
            project.style.display = 'block';
          } else {
            project.style.display = 'none';
          }
        });

        projectButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  }

  // --- Blog Page Post Filtering ---
  const blogButtons = document.querySelectorAll('.filter-tabs button');
  const posts = document.querySelectorAll('.featured-blog');

  if (posts.length > 0) {
    blogButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        blogButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        posts.forEach(post => {
          const categories = post.getAttribute('data-category').split(' ');

          if (filter === 'all' || categories.includes(filter)) {
            post.style.display = 'flex'; // because blog posts use flex layout
          } else {
            post.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Year in Footer ---
  const copyrightElem = document.getElementById("copyright");
  if (copyrightElem) {
    copyrightElem.innerHTML = `<h5>&copy; MadeByMeade ${new Date().getFullYear()}</h5>`;
  }

  // --- Client-Side Form Validation ---
  const form = document.querySelector('.contact-form form');
  if (form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
      let valid = true;

      inputs.forEach(input => {
        input.classList.remove('input-error');

        if (!input.value.trim()) {
          input.classList.add('input-error');
          valid = false;
        }

        if (input.type === 'email' && !emailRegex.test(input.value.trim())) {
          input.classList.add('input-error');
          valid = false;
        }
      });

      if (!valid) {
        e.preventDefault();
        alert('Please fill out all fields correctly.');
      }
    });
  }
});
