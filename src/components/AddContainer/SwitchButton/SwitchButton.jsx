import React from "react";
import { Space, Switch } from "antd";
import "./SwitchButton.css";

const SwitchButton = ({
  isExpenditure,
  setIsExpenditure,
  amount,
  setAmount,
}) => {
  const handleToggle = () => {
    setAmount(amount * -1);
    setIsExpenditure(!isExpenditure);
  };
  return (
    <Space direction="vertical">
      <Switch
        checkedChildren="-지출"
        unCheckedChildren="+수입"
        checked={isExpenditure}
        onClick={handleToggle}
      />
    </Space>
  );
};
export default SwitchButton;
