import { useEffect, useState } from "react";
import CardDog from "../CardDog/CardDog";
import styles from "./CardDogs.module.css";
import Loader from "../UI/Loader";
import Wrapper from "../Helper/Wrapper";
const CardDogs = (props) => {
  const { showDogs } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  if (typeof showDogs()[0] === "string")
    return (
      <Wrapper className={styles.homeWithoutDogs}>
        <h1>{showDogs()[0]}</h1>
      </Wrapper>
    );

  return (
    <Wrapper
      className={!isLoading ? `${styles.cardDogs}` : styles.homeWithoutDogs}
    >
      {isLoading ? (
        <Loader />
      ) : (
        showDogs().map((dog) => {
          const temperament = dog.temperaments
            ?.map((tem) => tem.name)
            .join(", ");
          return (
            <CardDog
              id={dog.id}
              key={dog.id}
              image={dog.image}
              name={dog.name}
              reference_image_id={dog.reference_image_id}
              temperament={dog.temperament || temperament}
              weight={dog.weight.metric || dog.weight}
            />
          );
        })
      )}
    </Wrapper>
  );
};

export default CardDogs;
