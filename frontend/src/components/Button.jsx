import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import React from 'react'

// Define button styles using class-variance-authority
const buttonVariants = cva(
  "rounded-lg transition-colors duration-300 flex justify-center items-center font-medium",
  {
    variants: {
      color: {
        primary: "bg-primary-900 text-white hover:bg-gray-700",
        secondary: "bg-white text-black hover:bg-gray-300",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ to, placeholder, color, size, className = "", ...props }) => {
  return (
    <Link
      to={to}
      className={clsx(buttonVariants({ color, size }), className)}
      {...props}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
