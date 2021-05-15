import { Button, MuiThemeProvider } from "@material-ui/core";
import Drawer from "../Drawer/Drawer";
import theme from "../../theme";
import Layout from "../Layout/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import ContentAccordion from '../Drawer/ContentAccordion';

function Sidebar() {
 

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Drawer folders={["a", "b", "c", "d"]}>
          <Link to="/a">Go to A {" | "}</Link>
          <Link to={{ pathname: "/b" }}>Go to B {" | "}</Link>
          <Link to="/c">go to C {" | "}</Link>
          <Link to="/d">Go to D {" | "}</Link>
          <div className="App">
            <CssBaseline />
            <Switch>
              <Route exact path="/" component={ContentAccordion} />
              
              <Route path="/b" component={Layout} />
              <Route
                path="/c"
                render={(props) => (
                  <Button variant="contained" color="primary">
                    Share
                  </Button>
                )}
              />
              <Route path="/d" component={ContentAccordion} />
            </Switch>
          </div>
        </Drawer>
      </MuiThemeProvider>
    </Router>
  );
}

export default Sidebar;
