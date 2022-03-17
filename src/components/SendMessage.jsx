import React, { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const { uid, photoURL } = auth.currentUser;
      await db.collection("messages").add({
        text: message,
        photoURL,
        uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setMessage("");
      scroll.current.scrollIntoView({behavior: 'smooth'})
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default SendMessage;
