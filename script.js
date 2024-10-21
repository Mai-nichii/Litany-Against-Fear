const sigilCursor = document.getElementById('cursorSigil');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    sigilCursor.style.left = (x - sigilCursor.offsetWidth / 2) + 'px';
    sigilCursor.style.top = (y - sigilCursor.offsetHeight / 2) + 'px';
});
