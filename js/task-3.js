
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події input
nameInput.addEventListener('input', () => {
    const trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});

