import axios from "axios";
import styles from "./DogsDetail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import dogImg from "../../assets/pawprint.png";
const DogsDetail = () => {
  const { id } = useParams();
  const [dog, setDog] = useState([]);

  useEffect(() => {
    async function fetchDat() {
      const response = await axios(`dogs/${id}`);
      setDog(response.data[0]);
    }
    fetchDat();
  }, [setDog, id]);

  const temperament = dog.temperaments?.map((tem) => tem.name).join(", ");

  return (
    <main className={styles.card}>
      <section>
        <Card className={styles.summary}>
          {dog.reference_image_id ? (
            <img
              width={400}
              height={300}
              src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
              alt="A pictue about a breed dog"
            />
          ) : (
            <img
              width={400}
              height={300}
              src={dogImg}
              alt="A pictue about a breed dog"
            />
          )}
          <h1>{dog.name}</h1>
          <summary>
            {dog.origin ? (
              <p>This dog is of {dog.origin} origin,</p>
            ) : (
              <p> This dog's origin is unknwon,</p>
            )}
            <p>
              its temperaments could be the following:{" "}
              {dog.temperament || temperament}; This dog is usually breeded for:{" "}
              {dog.bred_for ? dog.bred_for : "Unkown"}, its height is about{" "}
              {dog.height?.metric || dog.height}cm and its weight is about for{" "}
              {dog.weight?.metric || dog.weight}kg
            </p>
            <p>This dog can live for about till {dog.life_span || dog.age}</p>
          </summary>
        </Card>
      </section>
    </main>
  );
};

export default DogsDetail;
