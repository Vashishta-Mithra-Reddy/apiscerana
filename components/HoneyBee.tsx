'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const HoneyBee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const requestRef = useRef<number | undefined>(undefined);
  const beeRef = useRef<HTMLDivElement>(null);
  const prevAngleRef = useRef(0);
  
  // Initialize bee position in the center of the screen
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({ 
        x: window.innerWidth / 2, 
        y: window.innerHeight / 2 
      });
    }
    
    // Clean up animation frame on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);
  
  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Add some delay to make movement more natural
      setHover({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Animate bee movement with natural hovering
  useEffect(() => {
    const animate = () => {
      if (beeRef.current) {
        // Calculate distance to target
        const dx = hover.x - position.x;
        const dy = hover.y - position.y;
        
        // Add slight random movement for hovering effect
        const hoverX = Math.sin(Date.now() / 300) * 5;
        const hoverY = Math.sin(Date.now() / 400) * 5;
        
        // Move bee toward cursor with easing + hovering
        setPosition({
          x: position.x + dx * 0.05 + hoverX,
          y: position.y + dy * 0.05 + hoverY
        });
        
        // Calculate rotation angle based on movement direction
        let newAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Smooth rotation transition by interpolating between previous and new angle
        const angleDiff = newAngle - prevAngleRef.current;
        
        // Handle angle wrapping (e.g., going from 170 to -170 degrees)
        if (angleDiff > 180) {
          newAngle -= 360;
        } else if (angleDiff < -180) {
          newAngle += 360;
        }
        
        // Apply easing to rotation
        const smoothAngle = prevAngleRef.current + (newAngle - prevAngleRef.current) * 0.1;
        prevAngleRef.current = smoothAngle;
        
        // Apply the smooth position and rotation
        
        // has rotation too 
        // beeRef.current.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${smoothAngle}deg)`;
        beeRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;

      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [hover, position]);
  
  return (
    <div 
      ref={beeRef}
      className="fixed z-50 pointer-events-none transition-transform duration-1000 ease-out"
      style={{ 
        left: -30, // Offset for center positioning
        top: -30,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="relative w-[60px] h-[60px] animate-bee-hover">
        <Image 
          src="/bee.png" 
          alt="Honey Bee"
          width={80}
          height={80}
          className="drop-shadow-lg"
        />
        
        {/* Animated flight path */}
        <div className="absolute -z-10 opacity-40 top-[30px] left-[30px] w-[10px] h-[10px] rounded-full bg-honey-light blur-sm animate-bee-trail"></div>
      </div>
    </div>
  );
};

export default HoneyBee;