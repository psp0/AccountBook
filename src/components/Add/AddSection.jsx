import React, { useEffect, useState } from "react";
import "./AddSection.css";
import ToggleButton from "./InputOuputToggle/IOToggle";

import DateChange from "./DateChange/DateChange";
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
// `;
// import React, { useState, useEffect } from 'react';

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

// function AddSection() {
//   const [money, setMoney] = useState(0);
//   useEffect(() => {}, [money]);

//   return (
//     <div className="setting-container">
//       <div className="choose-IO">
//         수입
//         <input type="checkbox" className="Input" />
//         지출
//         <input type="checkbox" className="Output" defaultValue={"checked"} />
//       </div>
//       <div className="money-buttons">
//         {[500, 1000, 5000, 10000].map((e) => {
//           return (
//             <button
//               value={e}
//               onClick={(event) => {
//                 setMoney(event.currentTarget.value);
//               }}
//             >
//               \{e}
//             </button>
//           );
//         })}
//       </div>
//       <div className="money-input">
//         금액:
//         <input
//           type="text"
//           defaultValue={money}
//           onChange={(event) => setMoney(event.target.value)}
//         />
//         <button>초기화</button>
//       </div>
//       <div>
//         내용:
//         <input type="text" />
//       </div>
//       <button>가계부에 등록</button>
//     </div>
//   );
// }

// export default AddSection;
