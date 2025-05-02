// Include external JavaScript
import { animate, utils } from 'animejs';

// Add your JavaScript
function animateBoardBg() {
    animate('.billboard', 
        {
            backgroundImage: function() {
                const r = utils.random(50, 150);
                const g = utils.random(50, 150);
                const b = utils.random(50, 150);
                const color1 = `rgb(${r}, ${g}, ${b})`;

                const r2 = utils.random(50, 150);
                const g2 = utils.random(50, 150);
                const b2 = utils.random(50, 150);
                const color2 = `rgb(${r2}, ${g2}, ${b2})`;

                return `linear-gradient(45deg, ${color1}, ${color2})`;
            },
            ease: 'easeInOutSine',
            duration: 3000,
            onComplete: animateBoardBg
        });
}

console.log('Edit \'site/assets/js/index.js\' with your JavaScript.');
animateBoardBg();