document.addEventListener('DOMContentLoaded', function() {
    const lupa = document.getElementById('lupa');
    const zoomText = document.querySelector('.zoom-texto');

    function showLupa(event) {
        lupa.style.display = 'block';
        lupa.innerText = event.target.innerText;

        const x = event.clientX || event.touches[0].clientX;
        const y = event.clientY || event.touches[0].clientY;

        lupa.style.left = (x + 20) + 'px';
        lupa.style.top = (y + 20) + 'px';
    }

    function hideLupa() {
        lupa.style.display = 'none';
    }

    zoomText.addEventListener('mouseover', showLupa);
    zoomText.addEventListener('mousemove', showLupa);
    zoomText.addEventListener('mouseout', hideLupa);

    // For touch devices
    zoomText.addEventListener('touchstart', showLupa);
    zoomText.addEventListener('touchmove', showLupa);
    zoomText.addEventListener('touchend', hideLupa);
});
