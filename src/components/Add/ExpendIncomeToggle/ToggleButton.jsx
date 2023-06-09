import React, { useState } from "react";

const ToggleButton = () => {
  const [isMinus, setIsMinus] = useState(true);

  const handleToggle = () => {
    setIsMinus(!isMinus);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isMinus ? "-지출" : "+수입"}</button>
    </div>
  );
};

export default ToggleButton;
