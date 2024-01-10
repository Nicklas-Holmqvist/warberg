import React from 'react';
import { motion } from 'framer-motion';
import { LuChevronDown, LuChevronUp } from '@metamist/lucide-react';

interface ReadMoreButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  open: boolean;
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  text,
  open,
  ...props
}) => {
  return (
    <button
      aria-label="Öppna och läs om århundrandet eller stäng det"
      className="flex flex-col justify-center pb-4 pt-2 m-auto"
      {...props}>
      <motion.span
        className="text-black dark:text-white font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}>
        {!open ? text : 'Stäng'}
      </motion.span>
      {!open ? (
        <motion.span
          className="self-center text-black dark:text-white"
          whileHover={{ scale: 1.4, y: 5 }}>
          <LuChevronDown size={18} />
        </motion.span>
      ) : (
        <motion.span
          className="self-center text-black dark:text-white"
          initial={{ y: 5 }}
          whileHover={{ scale: 1.4, y: 0 }}>
          <LuChevronUp size={18} />
        </motion.span>
      )}
    </button>
  );
};

export default ReadMoreButton;
