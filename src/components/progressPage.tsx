import ProgressBar from "../features/progress-bar/progress-bar";
import Button from "./button";
import Container from "./container";
import Devider from "./devider";

const ProgressBarPage = () => {
  return (
    <Container>
      <h1>Progress bar</h1>
      <Devider />
      <ProgressBar progress={-2} />
      <div>
        <Button text="+ 5%" onClick={addProgress()} />
        <Button text="- 5%" color="red" />
      </div>
    </Container>
  );
};

export default ProgressBarPage;
