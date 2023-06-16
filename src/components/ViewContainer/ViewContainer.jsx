import React from "react";
import { Calendar } from "antd";
import locale from "antd/es/date-picker/locale/ko_KR";
import "./ViewContainer.css";
function ViewContainer() {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="calendar-container">
      <Calendar locale={locale} onPanelChange={onPanelChange} />
    </div>
  );
}

export default ViewContainer;
