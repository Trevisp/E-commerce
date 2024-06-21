// Function to update the clock
function timer() {
    const d = new Date();
    document.getElementById('hrs').innerHTML = d.getHours().toString().padStart(2, '0');
    document.getElementById('min').innerHTML = d.getMinutes().toString().padStart(2, '0');
    document.getElementById('sec').innerHTML = d.getSeconds().toString().padStart(2, '0');
}

// Update the clock every second
setInterval(timer, 1000);

// Run timer once on page load
timer();
