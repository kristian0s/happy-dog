import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";

export type AnimalsType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
};

//rows per page - limit koliko itema vidimo odjednom
const rpp = 8;
const noOfItems = 20;
const numberOfPages = Math.ceil(20 / 8);

const Animals = () => {
  const [animalsData, setAnimalsData] = useState<AnimalsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const getAnimals = () => {
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
      <Loader />
      <h1>Animals</h1>
      <Devider />
      <div className="grid grid--primary">
        {animalsData.map((animal) => {
          return <AnimalCard key={animal.name} animal={animal} />;
        })}
      </div>
      <Pagination onPaginate={(activePage) => console.log(activePage)} />
    </Container>
  );
};

export default Animals;
