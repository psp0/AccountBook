import React, { useEffect, useState } from "react";
import "./AddContainer.css";
import SwitchButton from "./SwitchButton/SwitchButton";
import { dateToString } from "../Module/DateToString";
import { DatePicker, Space, Button, Input } from "antd";
import locale from "antd/es/date-picker/locale/ko_KR";
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
        날짜:
        <DatePicker
          locale={locale}
          defaultValue={dayjs(date, "YYYY-MM-DD")}
          onChange={(date, dateString) => {
            setDate(dateString);
          }}
        />
      </div>
      <div className="add-amount-buttons">
        {[500, 1000, 5000, 10000].map((e) => (
          <Button
            key={e}
            value={e}
            onClick={(event) => {
              if (isExpenditure) {
                setAmount(amount - parseFloat(event.target.value));
              } else {
                setAmount(amount + parseFloat(event.target.value));
              }
            }}
            size={"small"}
          >
            {e}
          </Button>
        ))}
      </div>
      <div className="amount-input">
        금액:
        <Space.Compact>
          <Input
            value={amount}
            className={isExpenditure ? "ex" : "in"}
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9|-]/g, ""))
            }
            onChange={(event) => {
              let typeOnlyNumber = !isNaN(parseFloat(event.target.value));
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
        </Space.Compact>
        <Button type="primary" size="small" onClick={() => setAmount(0)}>
          초기화
        </Button>
      </div>
      <div>
        내용:
        <Space.Compact>
          <Input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Space.Compact>
      </div>
      <Button
        type="primary"
        onClick={() => {
          if (amount === 0) {
            alert("금액을 입력해주십시오");
          } else if (content === "") {
            alert("내용을 입력해주십시오");
          } else {
            if (localStorage.getItem("data") === null) {
              localStorage.setItem("data", "[]");
            }
            let arr = JSON.parse(localStorage.getItem("data"));
            let todayCount = arr.filter((e) => e.date === date).length;
            let obj = {
              type: isExpenditure ? "Expenditure" : "Income",
              date: date,
              order: todayCount,
              amount: amount,
              content: content,
              deleted: false,
            };
            arr.push(obj);
            localStorage.setItem("data", JSON.stringify(arr));
            alert("등록완료!");
            setAmount(0);
            setContent("");
          }
        }}
      >
        가계부에 등록
      </Button>
    </div>
  );
}

export default AddContainer;
