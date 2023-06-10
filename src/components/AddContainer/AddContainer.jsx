import React, { useState } from "react";
import "./AddContainer.css";
import ToggleButton from "./ExpendIncomeToggle/ToggleButton";
import DateChanger from "./DateChanger/DateChanger";

function AddContainer() {
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  return (
    <div className="add-container">
      <ToggleButton amount={amount} setAmount={setAmount} />
      <DateChanger />
      <div className="add-amount-buttons">
        {[500, 1000, 5000, 10000].map((e) => (
          <button
            key={e}
            value={e}
            onClick={(event) => {
              setAmount(amount + parseFloat(event.target.value));
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
          onChange={(event) => setAmount(parseFloat(event.target.value))}
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
