
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    // Notification element
    const notification = document.getElementById('notification');

    // Validation logic
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('Phone.No').value.trim();
    const message = document.getElementById('message').value.trim();

    // Regular expressions for validation
    const nameRegex = /^[a-zA-Z\s]+$/; // Only allows letters and spaces
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits

    // Validation checks
    let validationMessage = '';
    if (!nameRegex.test(name)) {
        validationMessage += "Please enter a valid name (letters and spaces only).<br>";
    }

    if (!phoneRegex.test(phone)) {
        validationMessage += "Please enter a valid 10-digit phone number.<br>";
    }

    if (email === "") {
        validationMessage += "Please enter a valid email address.<br>";
    }

    if (message === "") {
        validationMessage += "Please enter a message.<br>";
    }

    // If there are validation errors, show them in the notification
    if (validationMessage !== '') {
        notification.style.display = 'block';
        notification.style.backgroundColor = '#f8d7da';
        notification.style.color = '#721c24';
        notification.innerHTML = validationMessage;

        // Hide notification after 5 seconds
        setTimeout(function() {
            notification.style.display = 'none';
        }, 5000);
        return;
    }

    // If all validations pass, proceed with form submission
    const formData = new FormData(this);
  
    fetch('https://script.google.com/macros/s/AKfycbxoXPvodQYO4oVTM8Ngo6KLACHEK-xu3cVQIaiaB5Y6yaYFl8E5ld2YP4rqzTE5Lymu/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text()) // Get response as text
    .then(result => {
      // Show success notification in green
      notification.style.display = 'block';
      notification.style.backgroundColor = '#d4edda';
      notification.style.color = '#155724';
      notification.innerHTML = 'Message sent successfully!';
      
      document.getElementById('contactForm').reset();

      // Hide notification after 5 seconds
      setTimeout(function() {
        notification.style.display = 'none';
      }, 5000);
    })
    .catch(error => {
       notification.style.display = 'block';
      notification.style.backgroundColor = '#f8d7da';
      notification.style.color = '#721c24';
      notification.innerHTML = 'Failed to send the message. Please try again.';

      // Hide notification after 5 seconds
      setTimeout(function() {
        notification.style.display = 'none';
      }, 5000);
    });
});
