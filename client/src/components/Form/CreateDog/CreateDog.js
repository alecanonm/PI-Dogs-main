import styles from "../MyDogs.module.css";
import Button from "../../UI/Button";
import React, { useState } from "react";
import { postDog } from "../../../redux/actions";
import Card from "../../UI/Card";
import {
  ageValidation,
  heightValidation,
  nameValidation,
  weightValidation,
} from "../../Helper/validations";

const CreateDog = (props) => {
  const { temperaments } = props;
  const [selectedTemperaments, setSelectedTemperaments] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [err, setErr] = useState({
    name: "",
    height: "",
    weight: "",
    age: "",
  });
  const [newDog, setNewDog] = useState({
    name: "",
    height: "",
    weight: "",
    age: "",
    image: "imagen.png",
  });

  const isEmpty =
    selectedTemperaments.length === 0 ||
    newDog.name === "" ||
    newDog.height === "" ||
    newDog.weight === "" ||
    newDog.age === "" ||
    !(
      err.name === "" &&
      err.height === "" &&
      err.weight === "" &&
      err.age === ""
    );

  const onSelectTemp = (event) => {
    const { id, value, checked } = event.target;
    if (checked) {
      setSelectedTemperaments([...selectedTemperaments, value]);
      setSelectedId([...selectedId, id]);
    } else {
      setSelectedTemperaments(
        selectedTemperaments.filter((temperament) => temperament !== value)
      );
      setSelectedId(selectedId.filter((item) => item !== id));
    }
  };

  const onCreateDog = (e) => {
    e.preventDefault();
    window.location.reload();
    const createDog = {
      name: newDog.name,
      height: Number(newDog.height),
      weight: Number(newDog.weight),
      age: Number(newDog.age),
      image: "imagen.png",
      temperament: selectedId,
    };

    postDog(createDog);
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewDog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    name === "name" &&
      nameValidation({ ...newDog, [name]: value }, err, setErr);

    name === "height" &&
      heightValidation({ ...newDog, [name]: value }, err, setErr);

    name === "weight" &&
      weightValidation({ ...newDog, [name]: value }, err, setErr);

    name === "age" && ageValidation({ ...newDog, [name]: value }, err, setErr);
  };

  return (
    <Card className={styles.createDog}>
      <form action="submit">
        <div>
          <label htmlFor="name">Dog's Name:</label>
          <input
            type="text"
            name="name"
            value={newDog.name}
            onChange={onChangeHandler}
          />
          {err.name && <p className={styles.errMessage}>{err.name}</p>}
        </div>
        <div>
          <label htmlFor="height">height:</label>
          <input
            type="text"
            name="height"
            value={newDog.height}
            onChange={onChangeHandler}
          />
        </div>
        {err.height && <p className={styles.errMessage}>{err.height}</p>}
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            name="weight"
            type="text"
            value={newDog.weight}
            onChange={onChangeHandler}
          />
        </div>
        {err.weight && <p className={styles.errMessage}>{err.weight}</p>}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={newDog.age}
            onChange={onChangeHandler}
          />
        </div>
        {err.age && <p className={styles.errMessage}>{err.age}</p>}
        <div>
          <h3>Temperaments:</h3>
          <div className={styles.temperaments}>
            {temperaments.map((temp) => (
              <React.Fragment key={temp.id}>
                <label htmlFor={temp.name}>{temp.name}</label>
                <input
                  type="checkbox"
                  name="temperaments"
                  id={temp.id}
                  value={temp.name}
                  checked={selectedTemperaments.includes(temp.name)}
                  onChange={onSelectTemp}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <Button onClick={onCreateDog} className={isEmpty && styles.button}>
          Register
        </Button>
        <Button onClick={props.onHidden}>Cancel</Button>
      </form>
    </Card>
  );
};

export default CreateDog;
