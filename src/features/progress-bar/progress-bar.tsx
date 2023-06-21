import { useState } from "react";

type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  const handleProgress = () => {
    if (progress <= 0) {
      return (progress = 0);
    } else if (progress >= 100) {
      return (progress = 100);
    } else {
      return progress;
    }
  };

  const addProgress = () => {
    setCurrentProgress((progress) => progress + 5);

    return (
      <div className="progress__box">
        <div
          className="progressMoving"
          style={{ width: handleProgress() + "%" }}
        >
          <span className="progressMoving__lbl">{`${progress}%`}</span>
        </div>
      </div>
    );
  };
};

export default ProgressBar;
