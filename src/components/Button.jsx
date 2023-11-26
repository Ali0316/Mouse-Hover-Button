import { useState, useRef } from "react";
import "./Button.css";

function Button({ text }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);
  const handleMouseMove = (e) => {
    
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const xPercent = Math.round((x / width) * 100);
    const yPercent = Math.round((y / height) * 100);

    setMousePos({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 50 });
  };

  return (
    <button
      className="button"
      ref={buttonRef}
      
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #686868, #212121)`,
        border: `5px solid #686868`
      }}
    >
      {text}
    </button>
  );
}

export default Button;