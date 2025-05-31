import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';
import { ReactNode } from 'react';

interface AnimatedDivProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
  delay?: number;
}

export default function AnimatedDiv({
  children,
  className = '',
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  delay,
  ...props
}: AnimatedDivProps) {
  const isMobile = useIsMobile();

  // On mobile, render a regular div without animations
  if (isMobile) {
    return <div className={className} {...props}>{children}</div>;
  }

  // On desktop, render with full animations
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition ? { ...transition, delay } : { delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
