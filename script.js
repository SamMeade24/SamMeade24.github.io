// Dynamic Filtering on Homepage

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-tabs button');
    const projects = document.querySelectorAll('.featured-project');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            projects.forEach(project => {
                const category = project.getAttribute('data-category');

                if (filter === 'all' || category.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });

            // Highlight Active Button
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

// Year changes in Footer

document.getElementById("copyright").innerHTML = `<h5>&copy; MadeByMeade ${new Date().getFullYear()}</h5>`;

// Client-Side: Form Validation

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
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
});
  
