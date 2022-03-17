import React, { useState, useEffect, useRef } from "react";
import { SignOut, SendMessage } from "./index";
import { auth, db } from "../firebase";

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      <SignOut />
      <div className="messages"></div>
      {messages.map(({ id, uid, text, photoURL }) => (
        <div>
          <div
            key={id}
            className={`message ${
              uid === auth.currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        </div>
      ))}
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Chat;
