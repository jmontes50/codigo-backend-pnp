import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

export default function Messages({ messages, name }) {
  return (
    <ScrollToBottom>
      {messages.map((msj, i) => (
        <div key={i}>
          <Message message={msj} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
