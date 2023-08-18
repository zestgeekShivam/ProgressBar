import { useEffect, useState } from "react";
import { max } from "./utils/index";

const ProgressBar = ({ progress, onComplete }) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(Math.min(max, Math.max(progress, 0)));
    if (progress >= max) {
      onComplete();
    }
  }, [progress]);

  return (
    <div className="progress-bar">
      <div
        className="track "
        style={{
          height: "100%",
          width: percent + "%",
          // transform: `scaleX(${percent / max})`,
          // transformOrigin: "left",
          background: "green"
        }}
      ></div>
      <span
        style={{
          color: percent > max / 2 ? "white" : "black"
        }}
        className="progress-text"
      >
        {percent + "%"}
      </span>
    </div>
  );
};

export default ProgressBar;
