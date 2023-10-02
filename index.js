function addingEventListener() {
    // Select the element with the ID 'button'
    const buttonElement = document.getElementById('button');
  
    // Check if the button element exists
    if (buttonElement) {
      // Bind a click event listener to the button element
      buttonElement.addEventListener('click', function() {
        // This callback function will execute when the button is clicked
        alert('Button clicked!');
      });
    }
  }
