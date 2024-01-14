import React from 'react';

interface ShowMoreButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  showAllText: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  showAllText,
  ...props
}) => {
  return (
    <button
      aria-label={showAllText ? 'Visa mindre' : 'Visa mer'}
      className={`pt-2 font-bold hover:border-b-2 ${
        showAllText ? 'border-b-2' : ''
      }`}
      {...props}>
      {showAllText ? 'Visa mindre' : 'Visa mer'}
    </button>
  );
};

export default ShowMoreButton;
