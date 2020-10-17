import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const SmartDiv = (props) => {
  return (
    <div className="alert alert-primary">
      {props.children ? props.children : "empty"}
    </div>
  );
};
class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nb: props.start,
      pas: props.pas,
      interval: null,
    };
  }
  componentDidMount() {
    this.startInterval();
  }
  startInterval = () => {
    const interval = setInterval(() => {
      this.incrementer();
    }, 1000);
    this.setState((props, state) => {
      return { ...this.state, interval };
    });
    console.log("after start state: ", this.state);
  };

  stopInterval = () => {
    clearInterval(this.state.interval);
    console.log("before stop state: ", this.state);
    this.setState((props, state) => {
      return { ...this.state, interval: null };
    });
    console.log("after stop state: ", this.state);
  };
  incrementer() {
    this.setState((state, props) => {
      return { nb: this.state.nb + props.pas };
    });
  }

  render() {
    return (
      <span>
        {this.state.nb}
        <button
          className={this.state.interval ? "btn btn-danger" : "btn btn-success"}
          onClick={
            this.state.interval
              ? this.stopInterval.bind(this)
              : this.startInterval.bind(this)
          }
        >
          {this.state.interval ? "pause" : "start"}
        </button>
        <br />
      </span>
    );
  }
}

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "aymen", age: 37 };
  }
  changeName = (event) => {
    this.setState({ ...this.state, name: "skander", age: 2 });
  };
  render() {
    return (
      <div>
                
        <h1 onClick={this.changeName}>
                    Bonjour je suis {this.state.name} et j'ai {this.state.age}
           ans         
        </h1>
              
      </div>
    );
  }
}

Incrementer.defaultProps = {
  pas: 1,
  start: 1,
};
ReactDOM.render(
  <React.StrictMode>
    <StateComponent />
    <App />
    <SmartDiv>
      <Incrementer start={5} pas={5} />
      <Incrementer />
    </SmartDiv>
    <SmartDiv>Smart Div Content :D</SmartDiv>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
