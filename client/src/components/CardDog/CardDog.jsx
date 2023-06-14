import { Link } from "react-router-dom";
import styles from "./CardDog.module.css";
import Card from "../UI/Card";
import dogImg from "../../assets/pawprint.png";
const CardDog = (props) => {
  return (
    <Card className={styles.cardDog}>
      <Link to={`/detail/${props.id}`}>
        {props.reference_image_id ? (
          <img
            width={300}
            height={220}
            src={
              props.image?.url ||
              `https://cdn2.thedogapi.com/images/${props.reference_image_id}.jpg`
            }
            alt="A pictue about a breed dog"
          />
        ) : (
          <img
            width={200}
            height={200}
            src={dogImg}
            alt="A pictue about a breed dog"
          />
        )}
      </Link>
      <h2> {props.name}</h2>
      <div>
        <h3>Temperaments:</h3>
        <p>{props.temperament}</p>
      </div>
      <h3>Dog's weight:</h3>
      <p>{props.weight} Kg</p>
      <div></div>
    </Card>
  );
};

export default CardDog;
