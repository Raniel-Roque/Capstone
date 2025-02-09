document.addEventListener('DOMContentLoaded', () => {
    // Fetch PHP Data
    const fetchPHPData = () => {
      fetch('http://capstone.test/php/api.php')
        .then(response => {
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          return response.json();
        })
        .then(data => {
          document.getElementById('php-title').innerText = data.title;
          document.getElementById('php-message').innerText = data.message;
        })
        .catch(error => {
          document.getElementById('php-title').innerText = "Error Loading PHP Data";
          document.getElementById('php-message').innerText = error.message;
        });
    };
  
    // Load PHP data on page load
    fetchPHPData();
  
    // Reload data when button clicked
    document.getElementById('loadDataBtn').addEventListener('click', fetchPHPData);
  
    // Navigate back to index.html
    document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = '../index.html';
    });
  });
  