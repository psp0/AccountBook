import React from "react";
import { Calendar } from "antd";
import locale from "antd/es/date-picker/locale/ko_KR";
import "dayjs/locale/ko";
import "./ViewContainer.css";
const getListData = (value) => {
  let dateString = `${value.year()}-${String(value.month() + 1).padStart(
    2,
    "0"
  )}-${String(value.date()).padStart(2, "0")}`;
  let arr = (JSON.parse(localStorage.getItem("data")) || []).filter(
    (e) => e.date === dateString
  );
  return arr;
};
const getMonthData = (value) => {
  let dateString = `${value.year()}-${String(value.month() + 1).padStart(
    2,
    "0"
  )}-`;
  let arr = (JSON.parse(localStorage.getItem("data")) || []).filter(
    (e) => e.date.indexOf(dateString) !== -1
  );
  let sum = arr.reduce((total, value) => {
    return total + value.amount;
  }, 0);
  return sum > 0 ? "+" + sum : sum;
};

function ViewContainer() {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <div className={num > 0 ? "Income" : "Expenditure"}>
          총 수입과 지출: {num}
        </div>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <div className="">
        {listData.map((item) => (
          <div className={item.type} key={item.date + item.order}>
            {item.amount > 0 ? "+" + item.amount : item.amount}[{item.content}]
          </div>
        ))}
      </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="calendar-container">
      <Calendar
        locale={locale}
        cellRender={cellRender}
        onPanelChange={onPanelChange}
      />
    </div>
  );
}

export default ViewContainer;
