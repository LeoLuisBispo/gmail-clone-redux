import React from "react";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage(true))}
      >
        Compose
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title="Inbox"
        number="54"
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number="54" />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number="54" />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" number="54" />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
