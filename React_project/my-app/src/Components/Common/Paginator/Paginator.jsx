import React, { useState } from "react";
import c from "./Paginator.module.css";

const Paginator = ({
  TotalItemsCount,
  PageSize,
  CurrentPage,
  OnPageChanged,
  PortionSize = 10,
}) => {
  let PagesCount = Math.ceil(TotalItemsCount / PageSize);
  let pages = [];
  for (let i = 1; i <= PagesCount; i++) {
    pages.push(i);
  }
  let PortionCount = Math.ceil(PagesCount / PortionSize);
  let [PortionNumber, SetPortionNumber] = useState(1);
  let LeftPortionPageNumber = (PortionNumber - 1) * PortionSize + 1;
  let RightPortionPageNumber = PortionNumber * PortionSize;

  return (
    <div className={c.Paginator}>
      {PortionNumber > 1 && (
        <button
          className={c.PaginatorBut}
          onClick={() => {
            SetPortionNumber(PortionNumber - 1);
          }}
        >
          Pre
        </button>
      )}
      {pages

        .filter(
          (p) => p >= LeftPortionPageNumber && p <= RightPortionPageNumber
        )
        .map((u) => {
          return (
            <span
              className={CurrentPage === u && c.SelectedPage}
              onClick={() => {
                OnPageChanged(u);
              }}
            >
              {u}
            </span>
          );
        })}
      {PortionCount > PortionNumber && (
        <button
          className={c.PaginatorBut}
          onClick={() => {
            SetPortionNumber(PortionNumber + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Paginator;
