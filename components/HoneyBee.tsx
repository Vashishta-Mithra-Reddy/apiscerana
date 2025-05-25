'use client';

import { useEffect, useState, useRef } from "react";

const HoneyBee = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | undefined>(undefined);
  const beeRef = useRef<HTMLDivElement>(null);
  
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
        
        // Apply rotation based on movement direction
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        beeRef.current.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${angle}deg)`;
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
      className="fixed z-50 pointer-events-none"
      style={{ 
        left: -30, // Offset for center positioning
        top: -30,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="relative w-[60px] h-[60px] animate-bee-hover">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bee Wings */}
          <ellipse cx="20" cy="15" rx="15" ry="10" fill="rgba(255, 255, 255, 0.7)" />
          <ellipse cx="40" cy="15" rx="15" ry="10" fill="rgba(255, 255, 255, 0.7)" />
          
          {/* Bee Body */}
          <ellipse cx="30" cy="30" rx="15" ry="20" fill="#F2A900" />
          
          {/* Bee Stripes */}
          <rect x="22" y="20" width="16" height="4" fill="#000" />
          <rect x="22" y="28" width="16" height="4" fill="#000" />
          <rect x="22" y="36" width="16" height="4" fill="#000" />
          
          {/* Bee Face */}
          <circle cx="25" cy="25" r="2" fill="#000" />
          <circle cx="35" cy="25" r="2" fill="#000" />
          
          {/* Bee Stinger */}
          <path d="M30 50L27 55L30 53L33 55L30 50Z" fill="#000" />
        </svg>
        
        {/* Animated flight path */}
        <div className="absolute -z-10 opacity-40 top-[30px] left-[30px] w-[10px] h-[10px] rounded-full bg-honey-light blur-sm animate-bee-trail"></div>
      </div>
    </div>
  );
};

export default HoneyBee;