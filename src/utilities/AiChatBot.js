import React, { useEffect, useState } from "react";

export default function AiChatBot({ messages, onSend, Scroll, MenuOpened }) {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };


  return (
    <div className={`chatMainDiv ${Scroll === "low" ? "chattoggleTOp" : ""}`}>
      <div className={`chat-container ${MenuOpened ? 'chattogglemenu' : ''}`}>
        <div className="chat-window">
          {messages.map((msg, idx) => (
            <div key={idx} className={`msg ${msg.from}`}>
              <strong>{msg.from === "user" ? "You" : "AI"}:</strong> {msg.text}
            </div>
          ))}
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
    </div>
  );
}
