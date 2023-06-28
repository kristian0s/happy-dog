import { AnimalsType } from "./animals";
import imgClass from "./../../assets/images/animalClass.png";
import imgFood from "./../../assets/images/food.png";
import imgHabitat from "./../../assets/images/habitat.png";

type AnimalCardProps = {
  animal: AnimalsType;
};

const AnimalCard = ({ animal }: AnimalCardProps) => {
  const { name, animalClass, diet, species, habitat } = animal;

  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__header__img"
          width={"100%"}
          src={`https://source.unsplash.com/random/?${animal.name.replace(
            " ",
            "-"
          )}`}
          alt="Image of an animal"
        />
      </div>
      <div>
        <div className="card__title">{name}</div>
        <div className="card__subtitle">{species}</div>
      </div>
      <div className="card__row">
        <img src={imgClass} alt="icon of animal class" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgFood} alt="icon of animal diet" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="icon of animal habitat" />
        <span>{habitat}</span>
      </div>
    </div>
  );
};

export default AnimalCard;
