'use react';

import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';

interface YearContentProps {
  data: string;
}

const YearContent: React.FC<YearContentProps> = (data) => {
  const maxLength: number = 1000;
  const textLength: number = data.data.length;
  const shortenText: string = data.data.slice(0, maxLength) + '...';

  const [showAllText, setShowAllText] = useState<boolean>(false);
  return (
    <div className="year-content">
      {textLength >= maxLength && !showAllText ? (
        <ReactMarkdown>{shortenText}</ReactMarkdown>
      ) : null}
      {showAllText ? <ReactMarkdown>{data.data}</ReactMarkdown> : null}
      {textLength <= maxLength ? (
        <ReactMarkdown>{data.data}</ReactMarkdown>
      ) : null}
      {textLength >= maxLength ? (
        <button
          className="pt-2 font-bold hover:border-b-2"
          onClick={() => setShowAllText(!showAllText)}>
          {showAllText ? 'Dölj text' : 'Läs mer'}
        </button>
      ) : null}
    </div>
  );
};

export default YearContent;
