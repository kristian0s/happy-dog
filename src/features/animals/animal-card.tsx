// import { AnimalsType } from "./animals";
// import imgClass from "./../../assets/images/animalClass.png";
// import imgFood from "./../../assets/images/food.png";
// import imgHabitat from "./../../assets/images/habitat.png";
// import Button from "../../components/button";

// type AnimalCardProps = {
//   animal: AnimalsType;
//   onDelete: (id: string) => void;
// };

// const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
//   const { name, animalClass, diet, species, habitat, id } = animal;
//   const navigate = useNavigate();

//   return (
//     <div className="card">
//       <div className="card__header">
//         <img
//           className="card__header__img"
//           width={"100%"}
//           src={`https://source.unsplash.com/random/?${animal.name.replace(
//             " ",
//             "-"
//           )}`}
//           alt="Image of an animal"
//         />
//       </div>
//       <div>
//         <div className="card__title">{name}</div>
//         <div className="card__subtitle">{species}</div>
//       </div>
//       <div className="card__row">
//         <img src={imgClass} alt="icon of animal class" />
//         <span>{animalClass}</span>
//       </div>
//       <div className="card__row">
//         <img src={imgFood} alt="icon of animal diet" />
//         <span>{diet}</span>
//       </div>
//       <div className="card__row">
//         <img src={imgHabitat} alt="icon of animal habitat" />
//         <span>{habitat}</span>
//       </div>
//       <Button text="Delete" color="red" onClick={() => onDelete(id)} />
//       <Button
//         text="Edit"
//         color="green"
//         onClick={() => navigate(`animals/${id}`)}
//       />
//     </div>
//   );
// };

// export default AnimalCard;

import { AnimalsType } from "./animals";
import imgFood from "./../../assets/images/food.png";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import EditIcon from "../../assets/icons/edit-icon";
import imgClass from "./../../assets/images/animalClass.png";
import imgHabitat from "./../../assets/images/habitat.png";
import DeleteIcon from "../../assets/icons/delete-icon";
import { useState } from "react";

type AnimalCardProps = {
  animal: AnimalsType;
  onDelete: (id: string) => void;
};
const AnimalCard = ({ animal, onDelete }: AnimalCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { name, animalClass, diet, species, habitat, id } = animal;
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        className="card__header__img"
        width={"100%"}
        src={`http://source.unsplash.com/random/500x500/?${animal.name.replace(
          " ",
          "-"
        )}`}
        alt="image animal"
      />
      <div>
        <div className="card__title">{name}</div>
        <div className="card__subtitle">{species}</div>
      </div>
      <div className="card__row">
        <img src={imgClass} alt="class animal" />
        <span>{animalClass}</span>
      </div>
      <div className="card__row">
        <img src={imgFood} alt="diet animal" />
        <span>{diet}</span>
      </div>
      <div className="card__row">
        <img src={imgHabitat} alt="habitat animal" />
        <span>{habitat}</span>
      </div>
      <div className="card__delete" onClick={() => onDelete(id)}>
        {/* <div
        className="card__delete"
        onClick={() => {
          isOpen && (
            <div>
              <div className="modal__overlay" onClick={() => onClose()}></div>
              <div className="modal">
                <div className="modal__header">Delete the animal?</div>
                <div className="modal__body">
                  Are you sure u want to delete {animal.name} ?
                </div>
                <div className="modal__footer">
                  <Button text="Yes" color="green" />
                  <Button text="No" color="red" />
                </div>
              </div>
            </div>
          );
        }} */}
        <DeleteIcon />
        <span className="card__delete__lbl">Delete</span>
      </div>
      {/* <Button
        className="card__btn"
        text="Edit"
        color="green"
        onClick={() => navigate(`/animals/${id}`)}
      /> */}
    </div>
  );
};
export default AnimalCard;
