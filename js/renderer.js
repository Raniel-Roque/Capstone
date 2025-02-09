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
  
    // Load data when the app starts
    fetchPHPData();
  
    // Reload data when button clicked
    document.getElementById('loadDataBtn').addEventListener('click', fetchPHPData);
  
    // Navigate to page2.html
    document.getElementById('nextPageBtn').addEventListener('click', () => {
      window.location.href = 'html/page2.html';  // Simple navigation
    });
  });
  