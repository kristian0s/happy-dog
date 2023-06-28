import { useState } from "react";
import Container from "../../components/container";
import Devider from "../../components/devider";
import Field from "../../components/field";
import { AnimalsType } from "./animals";

const initialData: AnimalsType = {
  animalClass: "",
  diet: "",
  habitat: "",
  name: "",
  species: "",
};

const animalCreate = () => {
  const [inputsValue, setInputsValue] = useState<AnimalsType>(initialData);

  const handleInputsValue = (value: string, id: string) => {
    const newState: AnimalsType = { ...inputsValue };
    newState[id] = value;
    setInputsValue(newState);
  };
  return (
    <Container>
      <h1>Create a new animal</h1>
      <Devider />
      <div>
        <Field
          id="name"
          value={inputsValue.name}
          label="Name of an animal"
          onChange={(newValue) => {
            handleInputsValue(newValue, "name");
          }}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Species of an animal"
          onChange={(newValue) => {
            handleInputsValue(newValue, "species");
          }}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Species of an animal"
          onChange={(newValue) => {
            handleInputsValue(newValue, "species");
          }}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Species of an animal"
          onChange={(newValue) => {
            handleInputsValue(newValue, "species");
          }}
        />
        <Field
          id="species"
          value={inputsValue.species}
          label="Species of an animal"
          onChange={(newValue) => {
            handleInputsValue(newValue, "species");
          }}
        />
      </div>
    </Container>
  );
};

export default animalCreate;
