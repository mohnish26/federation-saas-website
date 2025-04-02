
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  direction: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        const opacity = Math.random() * 0.8 + 0.2;
        
        // Determine color based on random value
        const colorRandom = Math.random();
        let color;
        if (colorRandom < 0.7) {
          color = 'white'; // 70% white
        } else if (colorRandom < 0.85) {
          color = '#7D5FFF'; // 15% purple
        } else {
          color = '#FF5A87'; // 15% pink
        }
        
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color,
          speed: Math.random() * 0.15 + 0.05,
          direction: Math.random() * Math.PI * 2,
          opacity
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Move the particle
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw the particle
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;
