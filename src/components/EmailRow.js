import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectMail } from "../features/mailSlice";
import "./EmailRow.css";

const EmailRow = ({ title, subject, description, id, time }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
