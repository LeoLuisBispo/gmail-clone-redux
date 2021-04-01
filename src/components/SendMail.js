import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import "./SendMail.css";
import firebase from "firebase";

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div>
      <div className="sendMail">
        <div className="sendMail_header">
          <h3>New Message</h3>
          <Close
            className="sendMail_close"
            onClick={() => dispatch(closeSendMessage(true))}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="to"
            type="text"
            placeholder="To"
            ref={register({ required: true })}
          />
          {errors.to && <p className="sendMail_error">To is required</p>}

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <p className="sendMail_error">Subject is required</p>
          )}
          <input
            name="message"
            type="text"
            placeholder="Message"
            className="sendMail_message"
            ref={register({ required: true })}
          />
          {errors.message && (
            <p className="sendMail_error">Message is required</p>
          )}

          <div className="sendMail_options">
            <Button type="submit" className="sendMail_send">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
