import styles from "./MyDogs.module.css";
import React, { useEffect } from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import { addTemperament, getDogsFromDB } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import Card from "../UI/Card";
import dogImg from "../../assets/pawprint.png";
import CreateDog from "./CreateDog/CreateDog";
import Wrapper from "../Helper/Wrapper";

const MyDogs = (props) => {
  const { temperaments, dogsDB } = props;
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const onShowHandler = () => {
    setShowForm(true);
  };

  const onHiddenHandler = () => {
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(getDogsFromDB());
    dispatch(addTemperament());
  }, [dispatch]);

  return (
    <>
      <Wrapper className={styles["main-container"]}>
        <h1>Your Dogs</h1>
        <Card className={styles.callToAction}>
          <h2>It would be awesome if you bring a new dog! </h2>
          <div>
            <Button onClick={onShowHandler}>New dog</Button>
          </div>
        </Card>
        <Card className={styles.callToAction}>
          {dogsDB.length === 0 ? (
            <h3>There aren't any dogs yet.</h3>
          ) : (
            <ul>
              {dogsDB.map((dog) => (
                <li className={styles.item}>
                  <div>
                    <Link to={`/detail/${dog.id}`}>
                      <img width={50} src={dogImg} alt="" />
                    </Link>
                  </div>
                  <div>
                    <h2>{dog.name}</h2>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </Wrapper>
      {showForm &&
        ReactDOM.createPortal(
          <CreateDog temperaments={temperaments} onHidden={onHiddenHandler} />,
          document.getElementById("modals")
        )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    temperaments: state.temperaments,
    dogsDB: state.dogsDB,
  };
};

export default connect(mapStateToProps, null)(MyDogs);
