import React from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const SideBar = (props) => {
  return (
    <div className="side-bar">
      <div
        className="side-bar-name"
        onClick={() => props.changeView("student-home")}
      >
        {/* <div className='side-bar-name'> */}
        <ul>
          <li className="name">{props.name} </li>
          <li className="sub-name">{props.subContent} </li>
        </ul>
      </div>
      <div className="side-bar-menu">
        <ul>
          <li
            className="elements"
            onClick={() => props.changeView("time-table")}
          >
            <p className="icon" style={{ opacity: "0.5" }}>
              <FaThList />
            </p>
            <p className="elem">TIMETABLE</p>
          </li>
          <li className="elements" onClick={() => props.changeView("score")}>
            <p className="icon" style={{ opacity: "0.5" }}>
              <BsFillEyeFill />
            </p>
            <p className="elem">SCORE BULLETIN</p>
          </li>
          <li className="elements" onClick={() => props.changeView("request")}>
            <p className="icon" style={{ opacity: "0.5" }}>
              <AiFillMail />
            </p>
            <p className="elem">REQUEST DOCUCMENTS OR BOOK APPOINTEMENTS</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
