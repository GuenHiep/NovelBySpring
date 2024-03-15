import { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

function Rating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div style={styles.container}>
      <div>
        <span style={{ fontSize: "0.9rem" }}>Xếp hạng 4.62/5</span>
        <span style={{ fontSize: "0.9rem" }}>(40 đánh giá):</span>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <>
              <FaStar
                key={index}
                size={18}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
  },
};

export default Rating;
