document.addEventListener('DOMContentLoaded', () => {
    // Disable 3D tilt on mobile for performance and battery saving
    if (window.innerWidth < 768) return;

    const tiltElements = document.querySelectorAll('.tilt-3d');

    tiltElements.forEach(el => {
        const maxTilt = parseFloat(el.getAttribute('data-tilt-max')) || 8; // Optimal comfortable tilt limit
        
        // Find nested layers meant to float in 3D space
        const parallaxItems = el.querySelectorAll('[data-tilt-depth]');

        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            
            // Mouse coordinate offsets relative to center (-0.5 to 0.5 range)
            const mouseX = (e.clientX - rect.left) / width - 0.5;
            const mouseY = (e.clientY - rect.top) / height - 0.5;
            
            // Calculate pitch (X-axis) and yaw (Y-axis) rotation values
            const rotateX = (-mouseY * maxTilt).toFixed(2);
            const rotateY = (mouseX * maxTilt).toFixed(2);
            
            // Apply 3D rotation matrix to parent container
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Render layered inner parallax translation offsets on Z depth axis
            parallaxItems.forEach(item => {
                const depth = parseFloat(item.getAttribute('data-tilt-depth')) || 25;
                // Move element slightly horizontally and vertically following mouse direction
                const transX = (mouseX * 15).toFixed(1);
                const transY = (mouseY * 15).toFixed(1);
                
                item.style.transform = `translate3d(${transX}px, ${transY}px, ${depth}px)`;
            });
        });

        // Kill transitions on enter to prevent lag during drag
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'none';
            parallaxItems.forEach(item => {
                item.style.transition = 'none';
            });
        });

        // Reset elements on leave using smooth transition easing
        el.addEventListener('mouseleave', () => {
            el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            
            parallaxItems.forEach(item => {
                item.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                item.style.transform = 'translate3d(0px, 0px, 0px)';
            });
        });
    });

    // Hero 3D Mockup Parallax (Only activates when cursor is CLOSE to the visual)
    const heroSection = document.getElementById('home');
    const heroVisual = document.querySelector('.creative-visual-wrapper');
    if (heroSection && heroVisual) {
        const previewCard = heroVisual.querySelector('.hero-preview-card');
        const floatingPanel = heroVisual.querySelector('.floating-panel');
        const PROXIMITY_THRESHOLD = 180; // px – only react within this distance

        heroSection.addEventListener('mousemove', (e) => {
            const vRect = heroVisual.getBoundingClientRect();
            
            // Calculate distance from cursor to closest edge of the visual
            const closestX = Math.max(vRect.left, Math.min(e.clientX, vRect.right));
            const closestY = Math.max(vRect.top, Math.min(e.clientY, vRect.bottom));
            const dist = Math.sqrt((e.clientX - closestX) ** 2 + (e.clientY - closestY) ** 2);
            
            if (dist > PROXIMITY_THRESHOLD) {
                // Too far – smoothly return to default pose
                heroVisual.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                heroVisual.style.transform = 'perspective(1200px) rotateX(8deg) rotateY(-12deg) rotateZ(3deg)';
                if (previewCard) {
                    previewCard.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    previewCard.style.transform = 'translateZ(15px)';
                }
                if (floatingPanel) {
                    floatingPanel.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                    floatingPanel.style.transform = 'translateZ(55px)';
                }
                return;
            }
            
            // Within proximity – calculate intensity (1 = touching, 0 = at threshold edge)
            const intensity = 1 - (dist / PROXIMITY_THRESHOLD);
            
            heroVisual.style.transition = 'none';
            if (previewCard) previewCard.style.transition = 'none';
            if (floatingPanel) floatingPanel.style.transition = 'none';

            const width = vRect.width;
            const height = vRect.height;
            const mouseX = (e.clientX - vRect.left) / width - 0.5;
            const mouseY = (e.clientY - vRect.top) / height - 0.5;

            const rotateX = (8 - mouseY * 18 * intensity).toFixed(2);
            const rotateY = (-12 + mouseX * 18 * intensity).toFixed(2);

            heroVisual.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(3deg)`;
            
            if (previewCard) {
                const transX = (mouseX * 10 * intensity).toFixed(1);
                const transY = (mouseY * 10 * intensity).toFixed(1);
                previewCard.style.transform = `translate3d(${transX}px, ${transY}px, 15px)`;
            }
            if (floatingPanel) {
                const transX = (mouseX * 30 * intensity).toFixed(1);
                const transY = (mouseY * 30 * intensity).toFixed(1);
                floatingPanel.style.transform = `translate3d(${transX}px, ${transY}px, 55px)`;
            }
        });

        heroSection.addEventListener('mouseleave', () => {
            heroVisual.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            heroVisual.style.transform = 'perspective(1200px) rotateX(8deg) rotateY(-12deg) rotateZ(3deg)';
            
            if (previewCard) {
                previewCard.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                previewCard.style.transform = 'translateZ(15px)';
            }
            if (floatingPanel) {
                floatingPanel.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                floatingPanel.style.transform = 'translateZ(55px)';
            }
        });
    }
});
