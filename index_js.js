document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.read-more-btn');
    if (btn) { 
        btn.addEventListener('click', function() {
            const hiddenContent = document.querySelector('.hidden-content');
            if (hiddenContent) {
                const isHidden = window.getComputedStyle(hiddenContent).display === 'none';
                hiddenContent.style.display = isHidden ? 'block' : 'none';
                this.textContent = isHidden ? 'Show less' : 'Read more';
            }
        });
    }
});


function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        if (isElementInView(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);  
