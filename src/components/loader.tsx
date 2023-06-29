type LoaderProps = {
  isActive: boolean;
};

const Loader = ({ isActive }: LoaderProps) => {
  return (
    <>
      <div className="loader"></div>
      <div className="loaderLabel">Loading...Please wait...</div>
    </>
  );
};

export default Loader;
