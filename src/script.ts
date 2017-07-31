import './GitHub';
import './HatenaBlog';
import './Lastfm';
import * as $ from 'jquery';

document.addEventListener('DOMContentLoaded', async () => {
    const photo = document.getElementById('photo');
    const overlay = document.getElementById('overlay');

    window.addEventListener('scroll', () => {
        const offset = window.scrollY;

        if (photo) photo.style.filter = `blur(${offset / 250}px)`;
        if (overlay) overlay.style.opacity = String(offset / 7500);
    })

    const anchors = document.querySelectorAll('nav a') as NodeListOf<HTMLAnchorElement>;

    Array.from(anchors).forEach(a => {
        const target = document.getElementById(a.dataset.target || '');
        if (target === null) return;

        const scrollTop = target.offsetTop + 1;

        $('html, body').animate({ scrollTop }, 500);
    });
});
