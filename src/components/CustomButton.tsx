import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  startIcon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, className, startIcon, ...props }) => {
  return (
    <button className={className} {...props}>
      {startIcon && <span className="icon">{startIcon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
