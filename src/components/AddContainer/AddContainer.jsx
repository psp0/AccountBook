import React, { useEffect, useState } from "react";
import "./AddContainer.css";

import SwitchButton from "./SwitchButton/SwitchButton";
import { dateToString } from "../Module/DateToString";
import { DatePicker } from "antd";
import dayjs from "dayjs";
function AddContainer() {
  const [isExpenditure, setIsExpenditure] = useState(true);
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");
  const [date, setDate] = useState(dateToString(new Date()));

  useEffect(() => {
    if (amount > 0) {
      setIsExpenditure(false);
    } else if (amount < 0) {
      setIsExpenditure(true);
    }
  }, [amount]);
  return (
    <div className="add-container">
      <SwitchButton
        isExpenditure={isExpenditure}
        setIsExpenditure={setIsExpenditure}
        amount={amount}
        setAmount={setAmount}
      />
      <div>
        날짜 변경:
        <DatePicker
          defaultValue={dayjs(date, "YYYY-MM-DD")}
          onChange={(date, dateString) => {
            setDate(dateString);
          }}
      />
      </div>
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
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^0-9|-]/g, ""))
          }
          onChange={(event) => {
            let typeOnlyNumber =
              event.target.value.indexOf("*") === -1 &&
              event.target.value.indexOf("+") === -1 &&
              event.target.value.indexOf("/") === -1 &&
              event.target.value.indexOf("=") === -1 &&
              !isNaN(parseFloat(event.target.value));
            let typingMinusAtMiddle = event.target.value.lastIndexOf("-") > 0;
            let startTyping = amount === 0;
            if (typeOnlyNumber) {
              if (typingMinusAtMiddle) {
              setAmount(amount * -1);
              } else if (startTyping && isExpenditure) {
              setAmount(parseFloat(event.target.value) * -1);
              } else if (startTyping && !isExpenditure) {
                setAmount(parseFloat(event.target.value));
            } else {
              setAmount(parseFloat(event.target.value));
            }
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
              type: isExpenditure ? "Expenditure" : "Income",
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
