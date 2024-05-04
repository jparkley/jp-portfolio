"use client";

import { useEffect, useState } from "react";

interface GradientDivProps {
  children: React.ReactNode;
  className: string;
}

const GradientDiv: React.FC<GradientDivProps> = ({ children, className }) => {
  const GradientPosition = () => {
    const [mousePostion, setMousePostion] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const updateMousePosition = (e: any) => {
        setMousePostion({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);
    return mousePostion;
  };

  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${
          GradientPosition().y
        }px, #2F2F37, #1E1D2A 20% )`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
export default GradientDiv;
