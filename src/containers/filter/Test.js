import React, { Component } from "react";
import Select from "react-select";
import { colourOptions } from "../../data/data.ts";

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
      </>
    );
  }
}

export default Test;
