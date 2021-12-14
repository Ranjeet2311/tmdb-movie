import React from "react";
import "./Button.scss";

function Button({ btnClick, id, label, onClick }) {
  return (
    <div className="btn-container">
      <button onClick={btnClick} className="btn">
        {label}
      </button>
    </div>
  );
}

export default Button;
