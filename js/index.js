document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.frame').forEach(frame => {
        setInterval(() => {
            frame.classList.toggle('current-slide');
            frame.classList.toggle('next-slide');
            
        }, 10000);
    });
});