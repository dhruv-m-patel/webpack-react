import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <TopBar />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
