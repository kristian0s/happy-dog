type ProgressBarProps = {
  progress: number;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const handleProgress = () => {
    if (progress <= 0) {
      return (progress = 0);
    } else if (progress >= 100) {
      return (progress = 100);
    } else {
      return progress;
    }
  };
  return (
    <div className="progress__box">
      <div className="progressMoving" style={{ width: handleProgress() + "%" }}>
        <span className="progressMoving__lbl">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
