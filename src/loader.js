document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.bouncing_ball');
  
    // Simulate loading for 3 seconds (adjust as needed)
    setTimeout(function() {
      loader.style.display = 'none';  // Hide the loader
      document.getElementById('root').style.display = 'block';  // Show the portfolio content
    }, 3000);  // 3000 milliseconds = 3 seconds
  });
  