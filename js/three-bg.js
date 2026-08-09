document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas-3d-mesh');
    if (!canvas) return;

    let scene, camera, renderer;
    let particleSystem;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 300 : 800; // Performance optimizations for mobile screens

    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
        // 1. Scene & Camera Setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 250;

        // 2. Geometry creation (Particle locations)
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Distribute points in a wide spherical/random field
            positions[i] = (Math.random() - 0.5) * 600;
            positions[i + 1] = (Math.random() - 0.5) * 600;
            positions[i + 2] = (Math.random() - 0.5) * 600;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // 3. Create dynamic circular glowing particle texture using HTML5 Canvas
        const pCanvas = document.createElement('canvas');
        pCanvas.width = 16;
        pCanvas.height = 16;
        const pCtx = pCanvas.getContext('2d');
        
        // Radial gradient for a beautiful glowing core
        const gradient = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');      // White center
        gradient.addColorStop(0.2, 'rgba(0, 98, 255, 0.85)');    // Blue glow
        gradient.addColorStop(0.6, 'rgba(0, 98, 255, 0.2)');     // Fading outer ring
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');             // Transparent boundary
        pCtx.fillStyle = gradient;
        pCtx.fillRect(0, 0, 16, 16);

        const texture = new THREE.CanvasTexture(pCanvas);

        // 4. Points Material setup
        const material = new THREE.PointsMaterial({
            size: isMobile ? 2.5 : 4.0,
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        // 5. Points Object creation
        particleSystem = new THREE.Points(geometry, material);
        scene.add(particleSystem);

        // 6. WebGL Renderer configuration
        renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        // 7. Input listeners
        if (!isMobile) {
            document.addEventListener('mousemove', onDocumentMouseMove);
        }
        window.addEventListener('resize', onWindowResize);
        
        // Start Render Loop
        animate(0);
    }

    function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
        requestAnimationFrame(animate);

        const timeScale = time * 0.0004;

        if (!isMobile) {
            // Smooth camera mouse follow (Lag/Easing translation)
            targetX = mouseX * 0.08;
            targetY = mouseY * 0.08;

            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (-targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
        }

        // Particle subtle drift & wave distortion
        const positions = particleSystem.geometry.attributes.position.array;

        for (let i = 0; i < particleCount * 3; i += 3) {
            // Apply soft wave mathematical drift on Z coordinates
            positions[i + 2] += Math.sin(timeScale + i) * 0.03;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;

        // Slow constant rotations
        particleSystem.rotation.y = timeScale * 0.04;
        particleSystem.rotation.x = timeScale * 0.015;

        renderer.render(scene, camera);
    }

    // Initialize WebGL Scene
    init();
});
