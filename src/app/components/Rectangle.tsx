import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const RectangleButton: React.FC<Props> = ({ 
  children,
  onClick, 
}) => { 
  return (
    <button 
      onClick={onClick}
      className="rectangle-button"
    >
      <span className="button-text">{children}</span>
    </button>
  );
}

export default RectangleButton;
