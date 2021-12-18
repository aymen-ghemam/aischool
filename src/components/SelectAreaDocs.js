import React, { useState } from "react";
import Radio from "../components/Radio";

const SelectArea = () => {
  const [state, setstate] = useState({
    selects: ["Score Bulletin", "Certificate", "Mandate"],
  });

  return (
    <div className="select-area">
      {state.selects.map((select, index) => (
        <Radio key={index} text={select} name="area" />
      ))}
    </div>
  );
};

export default SelectArea;
