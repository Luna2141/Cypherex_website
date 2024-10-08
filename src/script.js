// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('textCanvas');
const ctx = canvas.getContext('2d');

// Set text properties
ctx.font = '128px Sora'; // Font settings
ctx.textAlign = 'center'; // Align the text
ctx.textBaseline = 'middle'; // Center vertically

// Draw the gradient background on the canvas
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, '#F6BCFF');
gradient.addColorStop(0.33, '#FF9EFB');
gradient.addColorStop(0.66, '#AE9AFF');
gradient.addColorStop(1, '#B1D0FF');

ctx.fillStyle = gradient;
ctx.fillText('Cypherex', canvas.width / 2, canvas.height / 2); // Draw the gradient text

// Create the inner shadow effect
function drawInnerShadow() {
    ctx.save(); // Save the current drawing state
    ctx.globalCompositeOperation = 'source-in'; // Clip the shadow inside the text
    
    // Apply inner shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)'; // Shadow color
    ctx.shadowBlur = 4; // Blur amount
    ctx.shadowOffsetX = 0; // X-offset
    ctx.shadowOffsetY = 4; // Y-offset
    
    ctx.fillText('Cypherex', canvas.width / 2, canvas.height / 2); // Draw the shadowed text
    ctx.restore(); // Restore the previous drawing state
}

// Call the function to draw the inner shadow
drawInnerShadow();
