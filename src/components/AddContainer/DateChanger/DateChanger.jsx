import React from "react";
import { dateToString } from "../../Module/DateToString";
import "./DateChanger.css";
function DateChanger() {
  const today = new Date();
  return (
    <div className="date-changer">
      날짜 변경 (기본값은 오늘)
      <input
        type="date"
        name=""
        id="date-changer-input-btn"
        defaultValue={dateToString(today)}
      />
    </div>
  );
}
export default DateChanger;
