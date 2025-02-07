import React from "react";
import clsx from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

function Container({ children, className, fluid = false }: ContainerProps) {
  return (
    <div
      className={clsx(
        fluid ? "w-full px-4" : "max-w-7xl mx-auto", // Adjust `max-w-*` as needed
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
