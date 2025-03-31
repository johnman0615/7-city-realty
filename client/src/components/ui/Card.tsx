import React from "react";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// Card Component
export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300", // Classes from homepage.tsx
        className
      )}
    >
      {children}
    </div>
  );
};

// CardContent Component
export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        "p-4", // Content spacing consistent with homepage.tsx
        className
      )}
    >
      {children}
    </div>
  );
};