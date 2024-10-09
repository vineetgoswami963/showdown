document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    
     const formData = new FormData(this);
  
     fetch('https://script.google.com/macros/s/AKfycbxoXPvodQYO4oVTM8Ngo6KLACHEK-xu3cVQIaiaB5Y6yaYFl8E5ld2YP4rqzTE5Lymu/exec', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text()) // Get response as text
    .then(result => {
      // Show success notification in green
      const notification = document.getElementById('notification');
      notification.style.display = 'block';
      notification.style.backgroundColor = '#d4edda';
      notification.style.color = '#155724';
      notification.innerHTML = 'Message sent successfully!';
      
       document.getElementById('contactForm').reset();
    })
    .catch(error => {
       const notification = document.getElementById('notification');
      notification.style.display = 'block';
      notification.style.backgroundColor = '#f8d7da';
      notification.style.color = '#721c24';
      notification.innerHTML = 'Failed to send the message. Please try again.';
    });
  });
  


