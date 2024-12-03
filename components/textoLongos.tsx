import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

export const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {text.length > maxLength ? (
        <>
          <span>
            {isExpanded ? text : `${text.slice(0, maxLength)}...`}
          </span>
          <button 
            onClick={toggleReadMore} 
            style={{
              border: "none", 
              background: "none", 
              color: "blue", 
              cursor: "pointer", 
              marginLeft: "5px",
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};
