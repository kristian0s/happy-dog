import { useEffect, useState } from "react";
import Button from "../../components/button";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Loader from "../../components/loader";

const LoaderPage = () => {
  const [loaderOpen, setLoaderOpen] = useState<Boolean>(false);

  const handleLoader = () => {
    setLoaderOpen(!loaderOpen);
    setTimeout(() => {
      setLoaderOpen(false);
    }, 2000);
  };

  return (
    <Container>
      <h1>Loader</h1>
      <Devider />
      <Button onClick={() => handleLoader()} text="Want to see a loader?" />
      {loaderOpen ? (
        <div>
          <Devider />
          <Loader />
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default LoaderPage;
