import React from "react";
import classes from "./AppWrapper.module.css";

function AppWrapper(props) {
  return <div className={classes.mainWrapper}>{props.children}</div>;
}

export default AppWrapper;
