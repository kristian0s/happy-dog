import { useEffect, useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import ProgressBar from "../../components/progress-bar";
import Button from "../../components/button";

const ProgressBarPage = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(50);

  const addProgress = () => {
    setCurrentProgress(currentProgress + 5);
    if (currentProgress > 99) {
      setCurrentProgress(100);
    }
  };

  const removeProgress = () => {
    setCurrentProgress(currentProgress - 5);
    if (currentProgress < 1) {
      setCurrentProgress(0);
    }
  };

  useEffect(() => {
    console.log(currentProgress);
  });

  return (
    <Container>
      <h1>Progress bar</h1>
      <Devider />
      <ProgressBar progress={currentProgress} />
      <div>
        <Button text="+ 5%" onClick={() => addProgress()} />
        <Button text="- 5%" color="red" onClick={() => removeProgress()} />
      </div>
    </Container>
  );
};

export default ProgressBarPage;
