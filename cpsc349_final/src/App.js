import React from "react";
import { Map } from "./Components";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
