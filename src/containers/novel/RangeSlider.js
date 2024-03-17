// import React, { Component } from "react";
// import InputRange from "react-input-range";
// import "react-input-range/lib/css/index.css"; // Import CSS

// class RangeSlider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: { min: 0, max: 100 }, // Giá trị ban đầu của thanh trượt
//     };
//   }

//   render() {
//     return (
//       <div>
//         <InputRange
//           maxValue={100} // Giá trị tối đa của thanh trượt
//           minValue={0} // Giá trị tối thiểu của thanh trượt
//           value={this.state.value} // Giá trị hiện tại của thanh trượt
//           onChange={(value) => this.setState({ value })} // Hàm xử lý khi giá trị thay đổi
//         />
//         <div>Min: {this.state.value.min}</div>
//         <div>Max: {this.state.value.max}</div>
//       </div>
//     );
//   }
// }

// export default RangeSlider;

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSlider = () => {
  const [value, setValue] = useState(0); // Giá trị ban đầu của thanh trượt

  const handleSliderChange = (newValue) => {
    setValue(newValue); // Cập nhật giá trị của thanh trượt khi thay đổi
  };

  return (
    <>
      <div className="d-flex col-12 row  align-items-center">
        <div className="col-9">
          <Slider
            min={0} // Giá trị tối thiểu của thanh trượt
            max={100} // Giá trị tối đa của thanh trượt
            value={value} // Giá trị hiện tại của thanh trượt
            onChange={handleSliderChange} // Hàm xử lý khi giá trị thay đổi
          />
        </div>
        <div className="col-3">Giá trị: {value}</div>
      </div>
    </>
  );
};

export default RangeSlider;
