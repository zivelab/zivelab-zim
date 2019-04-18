import "../../bootstrap";
// --- Post bootstrap -----
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

// controls
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

// Icons
import GithubIcon from "@material-ui/docs/svgIcons/GitHub";
import InfoIcon from "@material-ui/icons/Info";
import LightbulbOutlineIcon from "@material-ui/docs/svgIcons/LightbulbOutline";
import LightbulbFullIcon from "@material-ui/docs/svgIcons/LightbulbFull";
import MenuIcon from "@material-ui/icons/Menu";

// functions
import compose from "../utils/compose";
import { isEmpty } from "../utils/object";

// Components
import AboutButton from "./AboutButton";
import AppDrawer from "./AppDrawer";
import Banners from "./Banners";
import ConfigureButton from "./ConfigureButton";
import Notifications from "./Notifications";

// Pages
import AboutPage from "../../pages/getting-started/AboutPage";
import DevicePage from "../../pages/DevicePage";
import LinearRegressionPage from "../../pages/utilities/LinearRegressionPage";
import NotFoundPage from "../../pages/NotFoundPage";

import { ACTION_TYPES } from "../constants";

const drawerWidth = 240;
const styles = theme => ({
  "@global": {
    strong: {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
    flex: "0 1 auto"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  badgeMargin: {
    margin: theme.spacing.unit * 2
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    marginTop: "32px"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

if (process.browser) {
  // eslint-disable-next-line no-console
  console.log(
    `%c
    
    ███████╗██╗██╗   ██╗███████╗██╗      █████╗ ██████╗ 
    ╚══███╔╝██║██║   ██║██╔════╝██║     ██╔══██╗██╔══██╗
      ███╔╝ ██║██║   ██║█████╗  ██║     ███████║██████╔╝
     ███╔╝  ██║╚██╗ ██╔╝██╔══╝  ██║     ██╔══██║██╔══██╗
    ███████╗██║ ╚████╔╝ ███████╗███████╗██║  ██║██████╔╝
    ╚══════╝╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═╝  ╚═╝╚═════╝ 
    
    ZiveLab-Channels
`,
    "font-family:monospace;color:#1976d2;font-size:12px;"
  );
}

class App extends React.Component {
  queue = [];

  state = {
    openDrawer: false,
    openMessage: false,
    messageInfo: {}
  };

  toggleDrawer = open => () => {
    this.setState({ openDrawer: open });
  };

  togglePaletteType = () => {
    const paletteType =
      this.props.reduxTheme.paletteType === "light" ? "dark" : "light";
    document.cookie = `paletteType=${paletteType};path=/;max-age=31536000`;

    this.props.dispatch({
      type: ACTION_TYPES.THEME_CHANGE,
      payload: {
        paletteType
      }
    });
  };

  processQueue = () => {
    if (this.queue.length > 0) {
      this.setState({
        messageInfo: this.queue.shift(),
        openMessage: true
      });
    }
  };

  sendMessage = message => {
    this.queue.push({
      message,
      key: new Date().getTime()
    });

    if (this.state.openMessage) {
      this.setState({ openMessage: false });
    } else {
      this.processQueue();
    }
  };

  handleMessageClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openMessage: false });
  };

  handleMessageExited = () => {
    this.processQueue();
  };

  renderInfoButton = about => {
    if (isEmpty(about)) {
      return <React.Fragment />;
    } else {
      return (
        <Tooltip title="Show about" enterDelay={300}>
          <IconButton
            edge="end"
            component="a"
            color="inherit"
            href="https://github.com/zivelab/zivelab-channels"
            aria-label="about"
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      );
    }
  };

  devicePage = ({ match: { params } }) => {
    return <DevicePage ipAddress={params.id} sendMessage={this.sendMessage} />;
  };

  aboutPage = () => {
    return <AboutPage />;
  };

  linearRegressionPage = () => {
    return <LinearRegressionPage />;
  };

  notFoundPage = () => {
    return <NotFoundPage />;
  };

  render() {
    const { classes, reduxTheme, reduxTitle } = this.props;
    const { openDrawer, openMessage, messageInfo } = this.state;
    const title = reduxTitle || "Zive Channels";
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className={classes.root}>
          <CssBaseline />
          <Banners />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: openDrawer
            })}
          >
            <Toolbar disableGutters={!openDrawer}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Open drawer"
                onClick={this.toggleDrawer(true)}
                className={classNames(
                  classes.menuButton,
                  openDrawer && classes.hide
                )}
              >
                <MenuIcon />
              </IconButton>
              {title !== null && (
                <Typography
                  className={classes.title}
                  variant="h6"
                  color="inherit"
                  noWrap
                >
                  {title}
                </Typography>
              )}
              <div className={classes.grow} />
              <AboutButton sendMessage={this.sendMessage} />
              <ConfigureButton />
              <Tooltip title="Toggle theme" enterDelay={300}>
                <IconButton
                  color="inherit"
                  onClick={this.togglePaletteType}
                  aria-label="toggleTheme"
                >
                  {reduxTheme.paletteType === "light" ? (
                    <LightbulbOutlineIcon />
                  ) : (
                    <LightbulbFullIcon />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip title="Github repository" enterDelay={300}>
                <IconButton
                  edge="end"
                  component="a"
                  color="inherit"
                  href="https://github.com/zivelab/zivelab-channels"
                  aria-label="github"
                >
                  <GithubIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <AppDrawer
            open={openDrawer}
            notified={openMessage}
            sendMessage={this.sendMessage}
            toggleDrawer={this.toggleDrawer}
          />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: openDrawer
            })}
          >
            <Switch>
              <Redirect exact path="/" to="/getting-started/about" />
              <Route
                exact
                path="/getting-started/about"
                component={this.aboutPage}
              />
              <Route exact path="/my-device/:id" component={this.devicePage} />
              <Route
                exact
                path="/remote-device/:id"
                component={this.devicePage}
              />
              <Route
                exact
                path="/utilities/linear-regression"
                component={this.linearRegressionPage}
              />
              <Route component={this.notFoundPage} />
            </Switch>
          </main>
          <Notifications
            open={openMessage}
            messageInfo={messageInfo}
            onClose={this.handleMessageClose}
            onExited={this.handleMessageExited}
          />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  reduxAbout: PropTypes.object.isRequired,
  reduxTheme: PropTypes.object.isRequired,
  reduxTitle: PropTypes.string.isRequired
};

export default compose(
  connect(state => ({
    reduxAbout: state.about,
    reduxTheme: state.theme,
    reduxTitle: state.title
  })),
  withStyles(styles)
)(App);
