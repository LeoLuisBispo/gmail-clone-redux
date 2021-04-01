import { IconButton } from "@material-ui/core";
import {
  ArrowBack,
  Delete,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  UnfoldMore,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectOpenEmail } from "../features/mailSlice";
import "./Email.css";

const Email = () => {
  const history = useHistory();

  const selectedMail = useSelector(selectOpenEmail);

  return (
    <div className="email">
      <div className="email_tools">
        <div className="emailTools_left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailTools_right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="email_body">
        <div className="email_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="email_important" />
          <p>{selectedMail?.title}</p>
          <p className="email_time">{selectedMail?.time}</p>
        </div>
        <div className="email_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Email;
