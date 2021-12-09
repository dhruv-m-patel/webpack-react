import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  link: {
    color: 'white',
  }
}))

export default function TopBar() {
  const classes = useStyles();

  return (
    <ul>
      <li>
        <Link to="/" className={classes.link}>Home</Link>
      </li>
      <li>
        <Link to="/about" className={classes.link}>About</Link>
      </li>
      <li>
        <Link to="/dashboard" className={classes.link}>Dashboard</Link>
      </li>
    </ul>
  );
}
