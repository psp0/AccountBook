import React, { useEffect, useState } from "react";
import "./AddSection.css";
import ToggleButton from "./ExpendIncomeToggle/ToggleButton";
import DateChange from "./DateChange/DateChange";

function AddSection() {
  const [money, setMoney] = useState(0);

  useEffect(() => {}, [money]);

  return (
    <div className="setting-container">
      <div className="choose-IO">
        <ToggleButton />
      </div>
      <DateChange />
      <div className="money-buttons">
        {[500, 1000, 5000, 10000].map((e) => {
          return (
            <button
              value={e}
              onClick={(event) => {
                setMoney(money + parseFloat(event.target.value));
              }}
            >
              {e}
            </button>
          );
        })}
      </div>
      <div className="money-input">
        금액:
        <input
          type="text"
          value={money}
          onChange={(event) => setMoney(parseFloat(event.target.value))}
        />
        <button
          onClick={(event) => {
            setMoney(0);
          }}
        >
          초기화
        </button>
      </div>
      <div>
        내용:
        <input type="text" />
      </div>

      <button>가계부에 등록</button>
    </div>
  );
}

export default AddSection;
