import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import CardDogs from "../CardDogs/CardDogs";
import { connect } from "react-redux";
import { addDogs, addTemperament } from "../../redux/actions";
import FilterDogs from "../FilterDogs/FilterDogs";
import Wrapper from "../Helper/Wrapper";
import Pagination from "../Pagination/Pagination";

const HomePage = (props) => {
  const { addDogs, dogs, addTemperament, temperaments, toFilter } = props;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.trunc(dogs.length / 8);

  const filteredDogs = () => {
    const startIndex = currentPage * 8;
    const endIndex = startIndex + 8;
    return dogs.slice(startIndex, endIndex);
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

      <CardDogs showDogs={filteredDogs()} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      ></Pagination>
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
