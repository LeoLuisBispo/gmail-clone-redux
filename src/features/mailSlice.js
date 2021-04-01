import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessaggeIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessaggeIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessaggeIsOpen = false;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
} = mailSlice.actions;

export const selectOpenEmail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessaggeIsOpen;

export default mailSlice.reducer;
