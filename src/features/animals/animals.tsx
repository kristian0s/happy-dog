import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Select from "../../components/select";
import FloatingButton from "../../components/floating-button";

export type AnimalsType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

const noOfItems = 20;

const Animals = () => {
  const [animalsData, setAnimalsData] = useState<AnimalsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page - limit koliko itema vidimo odjednom
  const [rpp, setRpp] = useState<number>(8);

  const getAnimals = () => {
    setLoading(true);
    fetch(`http://localhost:3000/animals?_page=${page}&_limit=${rpp}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setTimeout(() => {
          setAnimalsData(data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnimals();
  }, [page]);

  return (
    <Container>
      {/* <Loader /> */}
      <div className="animals__header">
        <h1 className="animals__title">Animals</h1>
        <Select
          options={rppOptions}
          onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
        />
      </div>
      <Devider />
      <div className="grid grid--primary">
        {animalsData.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination
        numberOfPages={Math.ceil(noOfItems / rpp)}
        activePage={page}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};

export default Animals;
