import "../bootstrap";
// --- Post bootstrap -----
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { ACTION_TYPES } from "../modules/constants";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import ReactJson from "react-json-view";
import moment from "moment";

import AppContent from "../modules/components/AppContent";
import compose from "../modules/utils/compose";

import StartExpButton from "../modules/components/StartExpButton";
import StopExpButton from "../modules/components/StopExpButton";

const styles = theme => ({
  root: {
    marginBottom: 100
  },
  content: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: (0, theme.spacing.unit * 2)
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

// Special characters
/*
const voltageSign = "V";
const currentSign = "A";
const frequencySign = "Hz";
const ohmSign = "\u2126";
const degreeSign = "\u00B0";
const degreeCelsiusSign = "\u00B0C";
*/

// Math Constatnts
const dateTimeOffset = 62135596800000; // ticks from 0000-01-01 to 1970-01-01
const launched = new Date().getTime();
//const queue = [];

// Device specfic constants
const states = {
  NotAssigned: "NotAssigned",
  Idle: "Idle",
  Running: "Running",
  Finished: "Finished",
  Stopped: "Stopped",
  RunningNoiseLevel: "RunningNoiseLevel"
};

//const voltageRanges = [
//  { value: 0, label: "1000V" },
//  { value: 1, label: "100V" }
//];
//const currentRanges = [
//  { value: 0, label: "2A" },
//  { value: 1, label: "400mA" },
//  { value: 2, label: "200mA" },
//  { value: 3, label: "40mA" },
//  { value: 4, label: "20mA" },
//  { value: 5, label: "4mA" },
//  { value: 6, label: "2mA" },
//  { value: 7, label: "400uA" }
//];
//const aboutLabels = {
//  hostname: "Host Name",
//  model: "Model",
//  description: "Description",
//  frequencyRanges: "Frequency Ranges",
//  voltageRanges: "Voltage Ranges",
//  currentRanges: "Current Ranges",
//  temperatureSensor: "Temperature Sensor",
//  macAddress: "Mac Address",
//  ipAddress: "IP Address",
//  subnetMask: "Subnet Mask",
//  router: "Router",
//  port: "Port",
//  sifBoard: "SIF Board",
//  sifFirmware: "SIF Firmware",
//  sifSerialNumber: "SIF Serial Number",
//  zimBoard: "ZIM Board",
//  zimFirmware: "ZIM Firmware",
//  zimSerialNumber: "ZIM Serial Number"
//};
//const colHeaders = {
//  pt: "Pt",
//  time: "Time [s]",
//  frequency: "Freq [Hz]",
//  zreal: "Zreal [" + { ohmSign } + "]",
//  zimag: "Zimag [" + { ohmSign } + "]",
//  zmod: "Zmod [" + { ohmSign } + "]",
//  zphase: "Zphase [" + { degreeSign } + "]",
//  idc: "Idc [A]",
//  vdc: "vdc [V]",
//  temperature: "Temperature [" + { degreeCelsiusSign } + "]",
//  currentRange: "IRange [A]"
//};

const defaultParameters = {
  initialFrequency: 1000,
  finalFrequency: 1.0,
  density: 10,
  iteration: 1,
  currentRange: 2,
  maxInitialDelay: 12.0,
  skip: 1,
  cycles: 0
};

const parameterLabels = {
  initialFrequency: {
    label: "Initial Frequency",
    min: 0.1,
    max: 4000,
    default: 1000
  },
  finalFrequency: { label: "Final Frequency", min: 0.1, max: 4000, default: 1 },
  density: { label: "Density", min: 1, max: 20, default: 10 },
  iteration: { label: "Iteration", min: 1, max: 100, default: 1 },
  currentRange: { label: "Current Range", min: 0, max: 7, default: 2 },
  maxInitialDelay: {
    label: "Max Initial Delay",
    min: 0,
    max: 100,
    default: 12
  },
  skip: { label: "skip", min: 1, max: 100, default: 1 },
  cycles: { label: "cycles", min: 0, max: 100, default: 0 }
};

// [TODO]
// Warning: Can't perform a React state update on an unmounted component.
// This is a no-op, but it indicates a memory leak in your application.
// To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
//
// we have to find a way to handle async tasks

let currentIPAddress = null;

class DevicePage extends React.Component {
  state = {
    ipAddress: "",

    about: null,
    channel: null,
    cook: null,
    cookIndex: 0,

    parameters: defaultParameters,

    auxData: []
  };

  handleSamples = async () => {
    await this.loadSamplesAsync(this.state.cookIndex);
  };

  handleChannel = async () => {
    await this.loadChannelAsync();
  };

  handleChange = (event, name) => {
    if (name === "cookIndex") {
      this.setState({ [name]: Number(event.target.value) });
      return;
    }
    const key = Object.keys(parameterLabels).find(key => key === name);
    const parameter = parameterLabels[key];
    let value = event.target.value;
    if (value < parameter.min) {
      value = parameter.min;
    } else if (value > parameter.max) {
      value = parameter.max;
    }
    this.setState({
      parameters: {
        ...this.state.parameters,
        [key]: value
      }
    });
  };

  handleStartExp = async () => {
    await this.startExpAsync();
  };

  handleStopExp = async () => {
    await this.stopExpAsync();
  };

  dispatchAbout = about => {
    this.props.dispatch({
      type: ACTION_TYPES.ABOUT_CHANGE,
      payload: {
        about
      }
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.ipAddress !== nextProps.ipAddress) {
      currentIPAddress = nextProps.ipAddress;
      return {
        ipAddress: nextProps.ipAddress,
        about: null,
        channel: null,
        cook: null,
        cookIndex: 0
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.loadAboutAsync();
    this.loadChannelAsync();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ipAddress !== this.state.ipAddress) {
      this.loadAboutAsync();
      this.loadChannelAsync();
    }
    if (
      this.state.about &&
      JSON.stringify(prevProps.reduxAbout) !== JSON.stringify(this.state.about)
    ) {
      this.dispatchAbout(this.state.about);
    }
  }

  // [todo] We have to cancel all asynchronous tasks
  componentWillUnmount() {
    currentIPAddress = null;
  }

  loadAboutAsync = async () => {
    const { ipAddress } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const aboutURL = "http://" + ipAddress + "/about";
      const aboutFetch = await fetch(aboutURL);
      const aboutJson = await aboutFetch.json();
      if (aboutJson) {
        aboutJson.hostName = aboutJson.hostName || "Untitled";
        aboutJson.configureIPv4 = aboutJson.configureIPv4 || "Using DHCP";
        this.setState({
          about: aboutJson
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  loadChannelAsync = async () => {
    const { ipAddress } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const channelURL = "http://" + ipAddress + "/channel";
      const channelFetch = await fetch(channelURL);
      const channelJson = await channelFetch.json();
      if (channelJson) {
        const state = Object.keys(states).find(
          key => states[key] === channelJson.state
        );
        channelJson.isIdle = state === states.Idle;
        channelJson.isRunning =
          state === states.Running ||
          state === states.Finished ||
          state === states.Stopped;
        channelJson.isRunningNoiseLevel = state === states.RunningNoiseLevel;

        if (state === states.Running && this.state.channel.isIdle) {
          this.props.sendMessage("Started");
        } else if (state === states.Finished) {
          this.props.sendMessage("Successfully finished");
        } else if (state === states.Stopped) {
          this.props.sendMessage("Manually stopped");
        }

        // Update state: channel and auxData
        const newAuxItem = {
          time: new Date().getTime() - launched,
          voltage: channelJson.auxVoltage,
          temperature: channelJson.auxTemperature
        };
        if (this.state.auxData.length < 200) {
          this.setState({
            channel: channelJson,
            auxData: [...this.state.auxData, newAuxItem]
          });
        } else {
          // eslint-disable-next-line
          const [first, ...rest] = this.state.auxData;
          this.setState({
            channel: channelJson,
            auxData: [...rest, newAuxItem]
          });
        }
        // If lastStarted does not equals to cook.started, update cook.
        if (channelJson.lastStarted) {
          const lastTicks = channelJson.lastStarted.ticks;
          const lastCount = channelJson.lastStarted.count;
          if (
            !this.state.cook ||
            this.state.cook.started.ticks !== lastTicks ||
            this.state.cook.started.count !== lastCount
          ) {
            this.loadCookAsync();
          }
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      //clearInterval(this.timerID );
    }
  };

  loadCookAsync = async () => {
    const { ipAddress } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const cookURL = "http://" + ipAddress + "/cook";
      const cookFetch = await fetch(cookURL);
      const cookJson = await cookFetch.json();
      if (cookJson) {
        cookJson.started.moment = moment(
          cookJson.started.ticks - dateTimeOffset
        );
        this.setState({
          cook: cookJson,
          parameters: { ...cookJson.parameters }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  loadSamplesAsync = async index => {
    const { ipAddress, cook } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const samplesURL = "http://" + ipAddress + "/samples?index=" + index;
      const samplesFetch = await fetch(samplesURL);
      const samplesJson = await samplesFetch.json();
      if (
        samplesJson &&
        cook &&
        cook.data &&
        index >= 0 &&
        index < cook.data.length
      ) {
        // Update state: cook.data[index].samples
        const data = cook.data.map((item, j) => {
          if (j === index) {
            item.samples = samplesJson;
          }
          return item;
        });
        this.setState({
          cook: {
            ...this.state.cook,
            data: data
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  startExpAsync = async () => {
    const { ipAddress } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const ticks = new Date().getTime() + dateTimeOffset; // miliiseconds since 0000-01-01
      const payload = new URLSearchParams();
      payload.append(
        "initialFrequency",
        this.state.parameters.initialFrequency
      );
      payload.append("finalFrequency", this.state.parameters.finalFrequency);
      payload.append("density", this.state.parameters.density);
      payload.append("iteration", this.state.parameters.iteration);
      payload.append("currentRange", this.state.parameters.currentRange);
      payload.append("maxInitialDelay", this.state.parameters.maxInitialDelay);
      payload.append("skip", 1);
      payload.append("cycles", 0);
      payload.append("started", ticks);
      const settings = {
        method: "POST",
        headers: {
          "Content-Length": payload.toString().length.toString()
        },
        body: payload.toString()
      };
      const startURL = "http://" + ipAddress + "/start";
      const response = await fetch(startURL, settings);
      if (response.ok) {
        console.log("Started: " + ticks);
      }
    } catch (e) {
      console.log(e);
    }
  };

  stopExpAsync = async () => {
    const { ipAddress } = this.state;
    if (ipAddress !== currentIPAddress) return;
    try {
      const stopURL = "http://" + ipAddress + "/stop";
      const settings = {
        method: "POST",
        headers: {
          "Content-Length": 0
        }
      };
      const response = await fetch(stopURL, settings);
      if (response.ok) {
        console.log("Manually Stopped");
      }
    } catch (e) {
      console.log(e);
    }
  };

  getTitle = about => {
    if (about) {
      const hostName = about.hostName || "Untitled";
      const model = about.model.startsWith("Zive")
        ? about.model
            .split(" ")
            .slice(1)
            .join(" ")
        : about.model;
      const ip = about.ipAddress;
      return hostName === "Untitled"
        ? model + " (" + ip + ")"
        : hostName + " (" + model + ", " + ip + ")";
    } else {
      return "";
    }
  };

  render() {
    const { classes, reduxTheme } = this.props;
    const { about, channel, cook, cookIndex, parameters } = this.state;
    const samples =
      cook && cook.data && cook.data[cookIndex] && cook.data[cookIndex].samples
        ? cook.data[cookIndex].samples
        : null;
    const title = this.getTitle(about);
    const theme =
      reduxTheme.paletteType === "light" ? "rjv-default" : "monokai";
    return (
      <AppContent className={classes.root} title={title}>
        <div className={classes.content}>
          <Typography variant="h4" gutterBottom>
            About
          </Typography>
          <p />
          {about ? (
            <ReactJson
              src={about}
              displayDataTypes={false}
              collapsed={false}
              theme={theme}
            />
          ) : (
            <div />
          )}
          <p />
          <Typography variant="h4" gutterBottom>
            Channel
          </Typography>
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleChannel}
          >
            Refresh
          </Button>
          <p />
          {channel ? (
            <ReactJson
              src={channel}
              displayDataTypes={false}
              collapsed={true}
              theme={theme}
            />
          ) : (
            <div />
          )}
          <p />
          <Typography variant="h4" gutterBottom>
            Cook
          </Typography>
          <StartExpButton
            disabled={!channel || !channel.isIdle}
            parameters={parameters}
            onChange={this.handleChange}
            onStart={this.handleStartExp}
          />
          <StopExpButton
            disabled={!channel || !channel.isRunning}
            onStop={this.handleStopExp}
          />
          <p />
          {cook ? (
            <ReactJson
              src={cook}
              displayDataTypes={false}
              collapsed={true}
              theme={theme}
            />
          ) : (
            <div />
          )}
          <p />
          <Typography variant="h4" gutterBottom>
            Samples
          </Typography>
          <p />
          <TextField
            id="standard-number"
            label="Index"
            value={cookIndex}
            onChange={e => this.handleChange(e, "cookIndex")}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleSamples}
          >
            Get Samples
          </Button>
          <p />
          {samples ? (
            <ReactJson
              src={samples}
              displayDataTypes={false}
              collapsed={true}
              theme={theme}
            />
          ) : (
            <div />
          )}
        </div>
      </AppContent>
    );
  }
}

DevicePage.propTypes = {
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  ipAddress: PropTypes.string.isRequired,
  reduxAbout: PropTypes.object.isRequired,
  reduxTheme: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired
};

export default compose(
  connect(state => ({
    reduxAbout: state.about,
    reduxTheme: state.theme
  })),
  withStyles(styles)
)(DevicePage);
