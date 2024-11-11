import React, { FC } from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface AnimationProps {
  children: React.ReactNode;
  options?: MotionProps;
  style?: React.CSSProperties;
}

export const Animation: FC<AnimationProps> = ({ children, options }) => {
  return (
    <motion.div
      initial={{ x: '10%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-10%', opacity: 0 }}
      transition={{ delay: 0, duration: 0.2 }}
      {...options}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <>{children}</>
    </motion.div>
  );
};
