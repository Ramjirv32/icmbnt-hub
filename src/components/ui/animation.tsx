
import React, { useRef, useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-up' | 'slide-in' | 'slide-out';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function AnimatedElement({ 
  children, 
  className, 
  animation = 'fade-in',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  return (
    <div 
      ref={ref}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : 'opacity-0'
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
}

export function FadeIn({ children, className, ...props }: AnimatedElementProps) {
  return (
    <AnimatedElement className={className} animation="fade-in" {...props}>
      {children}
    </AnimatedElement>
  );
}

export function FadeUp({ children, className, ...props }: AnimatedElementProps) {
  return (
    <AnimatedElement className={className} animation="fade-up" {...props}>
      {children}
    </AnimatedElement>
  );
}

export function SlideIn({ children, className, ...props }: AnimatedElementProps) {
  return (
    <AnimatedElement className={className} animation="slide-in" {...props}>
      {children}
    </AnimatedElement>
  );
}
