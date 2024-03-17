import React, { Component } from "react";
import Select from "react-select";
import { colourOptions } from "../../data/data.ts";
import Test2 from "./Test2.js";

class Test extends Component {
  render() {
    return (
      <>
        <Select
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
        <Test2 />
      </>
    );
  }
}

export default Test;
