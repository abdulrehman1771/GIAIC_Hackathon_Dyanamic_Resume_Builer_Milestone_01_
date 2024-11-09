"use strict";
const buttons = document.querySelectorAll('.showHideButton');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetDiv = document.getElementById(targetId);
        // Toggle the display property
        if (targetDiv?.style.display === 'none') {
            targetDiv.style.display = 'block';
        }
        else {
            targetDiv.style.display = 'none';
        }
    });
});
// Get the color input and the div element
const colorPicker = document.getElementById('colorPicker');
const colorBox = document.getElementById('main');
// Add an event listener to the color input
colorPicker?.addEventListener('input', function () {
    // Change the background color of the div based on the selected color
    colorBox.style.backgroundColor = colorPicker.value;
});
