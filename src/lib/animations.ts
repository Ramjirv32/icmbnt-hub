
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const animateInView = (delay: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { 
    duration: 0.7, 
    ease: "easeOut", 
    delay 
  }
});

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', delay: number = 0) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 }
  };
  
  return {
    initial: { 
      ...directions[direction], 
      opacity: 0 
    },
    whileInView: { 
      x: 0, 
      y: 0, 
      opacity: 1 
    },
    viewport: { once: true },
    transition: { 
      duration: 0.7, 
      ease: "easeOut", 
      delay 
    }
  };
};
