const textarea = document.getElementById('my-text');
const charCount = document.getElementById('char-count');
const maxLength = textarea.getAttribute('maxlength');

// Listen for input event
textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    charCount.textContent = remaining;

    // Add exceeded class if limit is breached
    if (remaining < 0) {
        textarea.classList.add('exceeded');
    } else {
        textarea.classList.remove('exceeded');
    }
});
