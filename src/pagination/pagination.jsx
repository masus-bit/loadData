import React from "react";

export const Pages = (props) => {
    const {data,options,setPage}=props
  return (
    <div className="pagination">
      {new Array(data.length / options.itemsInPage).fill("").map((it, i) => {
        return (
          <span
            key={i}
            style={{ cursor: "pointer" }}
            className="page"
            onClick={(e) => {
                
              setPage(e.target.textContent);
            }}
          >
            {i + 1}{" "}
          </span>
        );
      })}
    </div>
  );
};
