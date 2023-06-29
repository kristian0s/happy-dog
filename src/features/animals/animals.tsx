import { useEffect, useState } from "react";
import Container from "../../components/container";
import AnimalCard from "./animal-card";
import Devider from "../../components/devider";
import Loader from "../../components/loader";
import Pagination from "../../components/pagination";
import Select from "../../components/select";
import FloatingButton from "../../components/floating-button";
import { OptionType } from "../select/select-page";
import { useNavigate } from "react-router-dom";

export type AnimalsType = {
  animalClass: string;
  diet: string;
  habitat: string;
  name: string;
  species: string;
  id: string;
};

const rppOptions: OptionType[] = [
  {
    label: "4 životinje",
    value: "4",
  },
  {
    label: "8 životinje",
    value: "8",
  },
  {
    label: "12 životinje",
    value: "12",
  },
];

const Animals = () => {
  const [animals, setAnimals] = useState<AnimalsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  //rows per page (limit koliko itema vidimo od jednom)
  const [rpp, setRpp] = useState<number>(8);
  const [noOfItems, setNoOfItems] = useState<number>(0);

  const navigate = useNavigate();

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
          setAnimals(data);
          setLoading(false);
        }, 300);
      })
      .catch((err) => console.log(err));

    const getAnimalsCount = () => {
      fetch(`http://localhost:3000/animals`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          setNoOfItems(data.length);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      getAnimalsCount();
    }, []);

    useEffect(() => {
      const numberOfPages = Math.ceil(noOfItems / rpp);
      if (page > numberOfPages) {
        setPage(numberOfPages);
      } else {
        getAnimals();
      }
    }, [page, rpp, noOfItems]);
  };

  const handleDelete = (id: string) => {
    fetch(`http://localhost:3000/animals/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <div className="animals__header">
        <h1 className="animals__title">Animals</h1>
        <Select
          options={rppOptions}
          onChange={(activeRpp) => setRpp(Number(activeRpp.value))}
          defaultValue={rppOptions[1]}
        />
      </div>
      <Devider />
      <div className="grid grid--primary type--san-serif">
        {animals.map((animal) => {
          return (
            <AnimalCard
              onDelete={(id: string) => handleDelete(id)}
              key={animal.name}
              animal={animal}
            />
          );
        })}
      </div>
      <Pagination
        activePage={page}
        numberOfPages={Math.ceil(noOfItems / rpp)}
        onPaginate={(activePage) => setPage(activePage)}
      />
      <FloatingButton />
    </Container>
  );
};

export default Animals;
