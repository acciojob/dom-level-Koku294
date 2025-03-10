// Wait for the DOM content to be loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the element with id 'level'
    const element = document.getElementById('level');
    
    // Initialize the count of DOM levels
    let levelCount = 0; // Start with 1 for the 'level' element itself
    
    // Traverse the parent nodes until we reach the <html> element
    let currentElement = element;
    while (currentElement.parentNode) {
        currentElement = currentElement.parentNode;
        levelCount++;
    }
    
    // Display the DOM level using alert
    alert(`The level of the element is: ${levelCount}`);
});
