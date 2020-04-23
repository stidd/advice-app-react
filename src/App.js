import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({
          advice: advice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClick = (e) => {
    this.fetchAdvice();
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={(e) => this.handleClick(e)}>
            <span>Get More Advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
