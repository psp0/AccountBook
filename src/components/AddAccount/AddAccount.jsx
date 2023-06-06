import React from "react";
import "./AddAccount.css";
// import styled from "styled-components";

// const TodoHeadBlock = styled.div`
//   padding-top: 48px;
//   padding-left: 32px;
//   padding-right: 32px;
//   padding-bottom: 24px;
//   border-bottom: 1px solid #e9ecef;
//   h1 {
//     margin: 0;
//     font-size: 36px;
//     color: #343a40;
//   }
//   .day {
//     margin-top: 4px;
//     color: #868e96;
//     font-size: 21px;
//   }
//   .tasks-left {
//     color: #20c997;
//     font-size: 18px;
//     margin-top: 40px;
//     font-weight: bold;
//   }
// `;

function AddAccount() {
  return (
    <>
      <div>
        수입
        <input type="checkbox" />
        지출
        <input type="checkbox" defaultValue={true} />
      </div>
      <div>
        <button>\500</button>
        <button>\1000</button>
        <button>\5000</button>
        <button>\10000</button>
      </div>
      <div className="money-input">
        금액:
        <input type="text" />
        <button>초기화</button>
      </div>
      <div>
        내용:
        <input type="text" />
      </div>
      <button>가계부에 등록</button>
    </>
  );
}

export default AddAccount;
