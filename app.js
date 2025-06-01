// Function to toggle places visibility with smooth transition
function togglePlaces(country) {
    const places = document.getElementById(country + '-places');
    places.classList.toggle('show');
  }
  
  // Attach the toggle functionality to each country card
  document.getElementById('india').addEventListener('click', function() {
    togglePlaces('india');
  });
  
  document.getElementById('spain').addEventListener('click', function() {
    togglePlaces('spain');
  });
  
  document.getElementById('usa').addEventListener('click', function(){
    togglePlaces('spain');
  });