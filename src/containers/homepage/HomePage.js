import React, { Component } from "react";

import Header from "./Header";
import HomeChild1 from "./HomeChild1";
import HomeChild2 from "./HomeChild2";
import HomeChild3 from "./HomeChild3";
import HomeChild4 from "./HomeChild4";
import HomeChild5 from "./HomeChild5";

class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeChild1 />
        <HomeChild2 />
        <HomeChild3 />
        <HomeChild4 />
        <HomeChild5 />
      </>
    );
  }
}

export default HomePage;
