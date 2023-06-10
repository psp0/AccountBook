import React from "react";

const ToggleButton = ({ isExpend, setIsExpend, amount, setAmount }) => {
  const handleToggle = () => {
    if (isExpend) {
      //->+
      if (amount < 0) {
        setAmount(amount * -1);
      }
    } else {
      //+->-
      if (amount > 0) {
        setAmount(amount * -1);
      }
    }
    setIsExpend(!isExpend);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isExpend ? "-지출" : "+수입"}</button>
    </div>
  );
};

export default ToggleButton;
