import React, { useEffect, useState } from "react";
import "./AddContainer.css";
import ToggleButton from "./ExpendIncomeToggle/ToggleButton";
import DateChanger from "./DateChanger/DateChanger";

function AddContainer() {
  const [isExpend, setIsExpend] = useState(true);
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  useEffect(() => {
    if (amount > 0) {
      setIsExpend(false);
    } else {
      setIsExpend(true);
    }
  }, [amount]);
  return (
    <div className="add-container">
      <ToggleButton
        isExpend={isExpend}
        setIsExpend={setIsExpend}
        amount={amount}
        setAmount={setAmount}
      />
      <DateChanger />
      <div className="add-amount-buttons">
        {[500, 1000, 5000, 10000].map((e) => (
          <button
            key={e}
            value={e}
            onClick={(event) => {
              if (isExpend) {
                setAmount(amount - parseFloat(event.target.value));
              } else {
                setAmount(amount + parseFloat(event.target.value));
              }
            }}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="amount-input">
        금액:
        <input
          type="text"
          value={amount}
          onChange={(event) => {
            debugger;
            if (event.target.value.lastIndexOf("-") > 0) {
              //typing "-"
              setAmount(amount * -1);
            } else if (isNaN(parseFloat(event.target.value))) {
              setAmount(0);
            } else if (amount === 0) {
              //first typing
              setAmount(parseFloat(event.target.value) * -1);
            } else {
              setAmount(parseFloat(event.target.value));
            }

            if (parseFloat(event.target.value) > 0 && amount !== 0) {
              setIsExpend(false);
            } else {
              setIsExpend(true);
            }
          }}
        />
        <button onClick={() => setAmount(0)}>초기화</button>
      </div>
      <div>
        내용:
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button>가계부에 등록</button>
    </div>
  );
}

export default AddContainer;
