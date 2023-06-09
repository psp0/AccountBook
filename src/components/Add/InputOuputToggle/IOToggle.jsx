import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOn ? "-지출" : "+수입"}</button>
    </div>
  );
};

export default ToggleButton;
