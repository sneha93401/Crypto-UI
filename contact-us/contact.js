// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const fullNameInput = document.querySelector('.frame-input');
//         const emailInput = document.querySelector('.hero-background');
//         const phoneInput = document.querySelector('.frame-child1');
//         const subjectInput = document.querySelector('.frame-child2');
//         const messageInput = document.querySelector('.hero-background-color-child');

//         const fullName = fullNameInput.value.trim();
//         const email = emailInput.value.trim();
//         const phone = phoneInput.value.trim();
//         const subject = subjectInput.value.trim();
//         const message = messageInput.value.trim();

//         let isValid = true;

//         // Validation for Full Name
//         if (fullName.length < 3) {
//             isValid = false;
//             showError(fullNameInput, 'Full name must be at least 3 characters');
//         } else {
//             hideError(fullNameInput);
//         }

//         // Validation for Email
//         if (!email.includes('@gmail.com')) {
//             isValid = false;
//             showError(emailInput, 'Please enter a valid email address (example@gmail.com)');
//         } else {
//             hideError(emailInput);
//         }

//         // Validation for Phone Number
//         if (!/^\d{10}$/.test(phone)) {
//             isValid = false;
//             showError(phoneInput, 'Please enter a 10-digit numeric phone number');
//         } else {
//             hideError(phoneInput);
//         }

//         if (isValid) {
//             // Store data in localStorage
//             const formData = {
//                 fullName,
//                 email,
//                 phone,
//                 subject,
//                 message
//             };
//             localStorage.setItem('formData', JSON.stringify(formData));

//             // Clear form inputs
//             form.reset();
//             // Optionally, show a success message or redirect to a success page
//         }
//     });

//     // Function to show error message
//     function showError(input, message) {
//         const errorMessage = input.nextElementSibling;
//         errorMessage.textContent = message;
//         errorMessage.classList.add('error-message');
//     }

//     // Function to hide error message
//     function hideError(input) {
//         const errorMessage = input.nextElementSibling;
//         errorMessage.textContent = '';
//         errorMessage.classList.remove('error-message');
//     }

//     // Clear errors on input focus
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//         input.addEventListener('focus', function() {
//             hideError(this);
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullNameInput = document.querySelector('.frame-input');
        const emailInput = document.querySelector('.hero-background');
        const phoneInput = document.querySelector('.frame-child1');
        const subjectInput = document.querySelector('.frame-child2');
        const messageInput = document.querySelector('.hero-background-color-child');

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        // Validation for Full Name
        if (fullName.length < 3) {
            isValid = false;
            showError(fullNameInput.nextElementSibling, 'Full name must be at least 3 characters');
        } else {
            hideError(fullNameInput.nextElementSibling);
        }

        // Validation for Email
        if (!email.includes('@gmail.com')) {
            isValid = false;
            showError(emailInput.nextElementSibling, 'Please enter a valid email address (example@gmail.com)');
        } else {
            hideError(emailInput.nextElementSibling);
        }

        // Validation for Phone Number
        if (!/^\d{10}$/.test(phone)) {
            isValid = false;
            showError(phoneInput.nextElementSibling, 'Please enter a 10-digit numeric phone number');
        } else {
            hideError(phoneInput.nextElementSibling);
        }

        if (isValid) {
            // Get existing form data from localStorage or initialize as an empty array
            let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

            // Add current form data to the array
            formDataArray.push({
                fullName,
                email,
                phone,
                subject,
                message
            });

            // Store updated form data array in localStorage
            localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

            // Clear form inputs
            form.reset();
            // Optionally, show a success message or redirect to a success page
        }
    });

    // Function to show error message
    function showError(element, message) {
        element.textContent = message;
        element.classList.add('error-message');
    }

    // Function to hide error message
    function hideError(element) {
        element.textContent = '';
        element.classList.remove('error-message');
    }

    // Clear errors on input focus
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            hideError(this.nextElementSibling);
        });
    });
});

