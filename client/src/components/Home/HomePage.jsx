import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import CardDogs from "../CardDogs/CardDogs";
import { connect } from "react-redux";
import { addDogs, addTemperament } from "../../redux/actions";
import FilterDogs from "../FilterDogs/FilterDogs";
import Button from "../UI/Button";
import Wrapper from "../Helper/Wrapper";

const HomePage = (props) => {
  const { addDogs, dogs, addTemperament, temperaments, toFilter } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const filteredDogs = () => {
    return dogs.slice(currentPage, currentPage + 8);
  };

  const nexPage = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    if (filteredDogs().length < 8) return;
    setCurrentPage(currentPage + 8);
  };

  const prevPage = () => {
    window.scroll({ top: 0, behavior: "smooth" });
    currentPage !== 0 && setCurrentPage(currentPage - 8);
  };

  useEffect(() => {
    addTemperament();
    addDogs();
  }, [addDogs, addTemperament]);

  return (
    <Wrapper className={styles.home}>
      <FilterDogs
        setCurrentPage={setCurrentPage}
        dogs={toFilter}
        temperaments={temperaments}
      />
      <CardDogs showDogs={filteredDogs} />
      <Button onClick={prevPage}>Prev</Button>
      <Button onClick={nexPage}>Next</Button>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
    toFilter: state.toFilter,
    temperaments: state.temperaments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDogs() {
      dispatch(addDogs());
    },
    addTemperament() {
      dispatch(addTemperament());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
