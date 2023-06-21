import Container from "../../components/container";
import notFound from "./../../assets/images/sad.png";
const NoMatch = () => {
  return (
    <>
      <Container>
        <div className="no-match">
          <img
            className="no-match__img"
            src={notFound}
            alt="sad cartboard character"
          />
          <div>
            <h1 className="no-match__title">404</h1>
            <h4 className="no-match__desc">There's nothing here sadly...</h4>
          </div>
        </div>
      </Container>
    </>
  );
};
export default NoMatch;
