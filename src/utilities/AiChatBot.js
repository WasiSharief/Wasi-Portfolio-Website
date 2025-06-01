import React, { useEffect, useRef, useState } from "react";
import { FaWindowMinimize } from "react-icons/fa";
import AIimage from "../assets/Mypics/AIFace.png";

export default function AiChatBot({ messages, onSend, Scroll, MenuOpened, HideTop }) {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const [AIShow, setAIShow] = useState(true);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("Added Msg");
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  const AItoggle = () => {
    setAIShow((prev) => !prev);
  }

  return (
    <div className={`chatMainDiv ${Scroll === "low" ? "chattoggleTOp" : ""} ${HideTop ? 'AI-V-Alingment' : ''}`}>
      {!AIShow && (
        <div className={`AIStartDiv ${MenuOpened ? "chattogglemenu" : ""}`} onClick={AItoggle}>
          {" "}
          <div className="AI-usage-infodiv">
            <h1>Hi, I'm Chris (Wasi's AI)</h1>
            <h3>
              Talk to my personalized AI to know more about me, my skills and
              experience.
            </h3>
          </div>
          <div className="AI-Icon">
            <span >
              <img className="AI-Face AIanimation" src={AIimage}></img>
            </span>
          </div>
        </div>
      )}

      {AIShow && (
        <div className={`chat-container ${MenuOpened ? "chattogglemenu" : ""}`}>
          <div className="chattopdiv">
            {" "}
            <h1>
              Chris <h4>(Wasi's Personalized Ai)</h4>
            </h1>{" "}
            <span onClick={AItoggle}>
              <FaWindowMinimize />
            </span>
          </div>
          <div className="chat-window-outer">
            <div className="chat-window">
              {messages.map((msg, idx) => (
                <div key={idx} className={`msg ${msg.from}`}>
                  <p>
                    <strong className="Role">
                      {msg.from === "user" ? "" : "Chris (AI): "}
                    </strong>
                    {msg.text.split("*").map(
                      (line, i) =>
                        line.trim() && (
                          <span key={i}>
                            {line.trim()}
                            <br />
                          </span>
                        )
                    )}
                  </p>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          <form onSubmit={handleSend} className="chat-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
