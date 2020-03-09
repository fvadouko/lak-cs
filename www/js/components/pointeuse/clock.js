import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var today = new Date();
    return (
      <div>
        <p className="text-center" style={{ fontSize: "20px" }}>
          {today.toLocaleDateString("fr-FR", options)}
        </p>
        <p className="text-center" style={{ fontSize: "40px" }}>
          {" "}
          {this.state.time}
        </p>
      </div>
    );
  }
}
