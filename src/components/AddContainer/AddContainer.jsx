import React, { useEffect, useState } from "react";
import "./AddContainer.css";
import ToggleButton from "./ExpendIncomeToggle/ToggleButton";
import DateChanger from "./DateChanger/DateChanger";
import { dateToString } from "../Module/DateToString";

function AddContainer() {
  const [isExpenditure, setIsExpenditure] = useState(true);
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  const [date, setDate] = useState(dateToString(new Date()));

  useEffect(() => {
    if (amount > 0) {
      setIsExpenditure(false);
    } else {
      setIsExpenditure(true);
    }
  }, [amount]);
  return (
    <div className="add-container">
      <ToggleButton
        isExpend={isExpenditure}
        setIsExpend={setIsExpenditure}
        amount={amount}
        setAmount={setAmount}
      />
      <DateChanger date={date} setDate={setDate} />
      <div className="add-amount-buttons">
        {[500, 1000, 5000, 10000].map((e) => (
          <button
            key={e}
            value={e}
            onClick={(event) => {
              if (isExpenditure) {
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
              setIsExpenditure(false);
            } else {
              setIsExpenditure(true);
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
      <button
        onClick={() => {
          if (amount === 0) {
            alert("금액을 입력해주십시오");
          } else if (content === "") {
            alert("내용을 입력해주십시오");
          } else {
            let obj = {
              type: isExpend ? "Expenditure" : "Income",
              date: date,
              amount: amount,
              content: content,
            };
            localStorage.setItem(localStorage.length, JSON.stringify(obj));
            alert("등록완료!");
            setAmount(0);
            setContent("");
            setDate(dateToString(new Date()));
          }
        }}
      >
        가계부에 등록
      </button>
    </div>
  );
}

export default AddContainer;
