import React from "react";

const TimeTable = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title">M1 Computer Vision Timetable</h1>
        <h4 className="secondary">
          Check out the latest updates on your timeline
        </h4>
        <div style={{ marginTop: "2rem" }}>
          <img src="../assets/table.svg" alt="" />
        </div>
      </div>
      <img
        style={{ position: "fixed", bottom: "0", height:'28%'}}
        src="../assets/velo.svg"
        alt=""
      />
    </div>
  );
};

export default TimeTable;
