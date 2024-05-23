//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const output = document.getElementById('output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form submission

    const textInput = document.getElementById('text').value;
    const delayInput = parseInt(document.getElementById('delay').value);

    if (isNaN(delayInput)) {
      output.innerText = 'Please enter a valid number for delay.';
      return;
    }

    output.innerText = 'Waiting...';

    try {
      await delay(delayInput); // Wait for the specified delay
      output.innerText = textInput; // Display the text after the delay
    } catch (error) {
      console.error('Error:', error);
      output.innerText = 'An error occurred.';
    }
  });
});

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
