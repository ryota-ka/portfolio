import './GitHub';
import './HatenaBlog';
import './Lastfm';

document.addEventListener('DOMContentLoaded', async () => {
    const photo = document.getElementById('photo');
    const overlay = document.getElementById('overlay');

    window.addEventListener('scroll', () => {
        const offset = window.scrollY;

        if (photo) photo.style.filter = `blur(${offset / 250}px)`;
        if (overlay) overlay.style.opacity = String(offset / 7500);
    })
});
