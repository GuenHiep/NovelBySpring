import React, { Component } from "react";

import Header from "../homepage/Header";
import NovelChild1 from "./NovelChild1";
import NovelChild2 from "./NovelChild2";

class NovelPage extends Component {
  render() {
    return (
      <>
        <Header />
        <NovelChild1 />
        <NovelChild2 />
      </>
    );
  }
}

export default NovelPage;
