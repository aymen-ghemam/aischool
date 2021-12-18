import React, { useEffect, useState } from "react";
import { AiFillPropertySafety } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import Message from "./Message";

const Bot = (props) => {
  const [state, setstate] = useState({
    msg: "",
    request: "",
    list: [],
  });
  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  const handleChange = (e) => {
    setstate({ ...state, msg: e.target.value });
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      handleSend();
    }
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSend = () => {
    if (state.msg) {
      const msg = state.msg;
      let list = state.list;
      list.push({ text: msg, type: "right" });
      setstate({ ...state, list, request: msg });
      document.getElementById("msg").value = "";
    }
  };

  useEffect(async () => {
    if (state.request) {
      let msg = "Unknown command!";
      if (state.request.search("exam") !== -1)
        msg = "First semester exams will be starting on January 16th";
      if (state.request.search("emergen") !== -1) {
        msg = "Report an emergency!";
        await sleep(2000);
        props.setCurrent("report");
      }

      await sleep(1000);
      setstate({
        ...state,
        list: [...state.list, { text: msg, type: "left" }],
      });
    }
  }, [state.request]);

  return expanded ? (
    <div id="bot" onKeyPress={handleKeyPress}>
      <div className="head" onClick={toggle}>
        <h3>Chat Bot</h3>
      </div>
      <div className="body">
        {state.list.map((msg, index) => (
          <Message text={msg.text} type={msg.type} />
        ))}
      </div>
      <div className="bottom">
        <input
          id="msg"
          type="text"
          placeholder="ask something ..."
          onChange={handleChange}
        />
        <IoMdSend color="#118BF1" size="1.7em" onClick={handleSend} />
      </div>
    </div>
  ) : (
    <div className="min-bot" onClick={toggle}>
      <span>bB</span>
    </div>
  );
};

export default Bot;
