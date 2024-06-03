document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    if (!isNaN(delay) && delay > 0) {
        await delayFunction(delay);
        document.getElementById('output').textContent = text;
        console.log('Output after delay:', document.getElementById('output').textContent); // Added console.log
    } else {
        document.getElementById('output').textContent = "Please enter a valid delay.";
    }
});

function delayFunction(ms) {
    console.log('Delay function called with:', ms); // Added console.log
    return new Promise(resolve => setTimeout(resolve, ms));
}