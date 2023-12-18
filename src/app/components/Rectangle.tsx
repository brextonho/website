import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void; // onClick optional
}

const RectangleButton: React.FC<Props> = ({ 
  children,
  onClick, 
}) => { 
  return (
    <button 
      onClick={onClick}
      className="rectangle-button h-sm-vh xl:h-xl-vh"
    >
      <span className="button-text">{children}</span>
    </button>
  );
}

export default RectangleButton;
