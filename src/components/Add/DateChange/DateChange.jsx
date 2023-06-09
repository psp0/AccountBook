import React from "react";
import { dateToString } from "../../Module/DateToString";
import "./DateChange.css";
function DateChange() {
  const today = new Date();
  return (
    <div className="date-change">
      날짜 변경 (기본값은 오늘)
      <input
        type="date"
        name=""
        id="date-change-input-btn"
        defaultValue={dateToString(today)}
      />
    </div>
  );
}
export default DateChange;
