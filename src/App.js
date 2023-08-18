import { useEffect, useRef, useState } from "react";
import ProgressBar from "./progressBar";
import "./styles.css";
import { max } from "./utils/index";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  let interval = useRef();
  useEffect(() => {
    interval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < max) {
          return prev + 1;
        } else {
          clearInterval(interval.current);
          return prev;
        }
      });
    }, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="App">
      <span> Progress Bar </span>
      <ProgressBar
        progress={progress}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span> {success ? "Compleated!" : "Loading"} </span>
    </div>
  );
}
