import React, { useEffect, useRef } from 'react';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    // Mouse interaction
    const mouse = {
      x: -1000, // Start off screen
      y: -1000,
      radius: 150
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.directionX = (Math.random() * 0.6) - 0.3; // Increased Speed
        this.directionY = (Math.random() * 0.6) - 0.3;
        this.size = Math.random() * 2 + 1; // Increased Size (min 1px, max 3px)
        this.color = '#00f0ff'; // Cyber primary
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse interaction
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        // Push particles away slightly if too close to mouse
        if (distance < mouse.radius) {
            if (mouse.x < this.x && this.x < canvas.width - 10) {
                this.x += 2;
            }
            if (mouse.x > this.x && this.x > 10) {
                this.x -= 2;
            }
            if (mouse.y < this.y && this.y < canvas.height - 10) {
                this.y += 2;
            }
            if (mouse.y > this.y && this.y > 10) {
                this.y -= 2;
            }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      if (!canvas) return;
      particlesArray = [];
      // Increased density: reduced divider from 15000 to 9000
      const numberOfParticles = (canvas.height * canvas.width) / 9000; 
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      if (!canvas || !ctx) return;
      // Pass timestamp to keep smooth
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    function connect() {
      if (!canvas || !ctx) return;
      let opacityValue = 1;
      const connectionDistance = 120; // Fixed pixel distance for consistent connections

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                         ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < (connectionDistance * connectionDistance)) {
            opacityValue = 1 - (distance / (connectionDistance * connectionDistance));
            // Draw line
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacityValue * 0.25})`; // Higher opacity for lines
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Init
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // z-0 ensures it sits on top of parent bg but behind content
      className="absolute top-0 left-0 w-full h-full z-0 opacity-80 pointer-events-none"
    />
  );
};

export default ParticlesBackground;