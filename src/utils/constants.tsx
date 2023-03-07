import { List } from "@react95/core";
import { FrameProps } from "@react95/core/@types/Frame/Frame";

import { IModalProps } from "../types/interfaces";
import classes from "./Window.module.css";

export const COMMON_MODAL_PROPS: IModalProps = {
  className: classes.Window,
  height: "X",
  width: "X",
  defaultPosition: {
    x: 20,
    y: 20,
  },
  menu: [
    {
      name: "File",
      list: (
        <List>
          <List.Item>Do nothing</List.Item>
        </List>
      ),
    },
    {
      name: "Edit",
      list: (
        <List>
          <List.Item>Do nothing</List.Item>
        </List>
      ),
    },
    {
      name: "View",
      list: (
        <List>
          <List.Item>Do nothing</List.Item>
        </List>
      ),
    },
    {
      name: "Help",
      list: (
        <List>
          <List.Item>Do nothing</List.Item>
        </List>
      ),
    },
  ],
};

export const COMMON_FRAME_PROPS: Pick<
  FrameProps,
  "bg" | "boxShadow" | "h" | "w" | "padding" | "overflowY"
> = {
  bg: "white",
  boxShadow: "in",
  h: "100%",
  w: "100%",
  padding: "0px 15px",
  overflowY: "auto",
};
