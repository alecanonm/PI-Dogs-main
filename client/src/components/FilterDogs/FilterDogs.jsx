import styles from "./FilterDogs.module.css";
import { useDispatch } from "react-redux";
import {
  dogsByOrigin,
  dogsByTemperament,
  dogsByAlphabetical,
  dogsByWeight,
} from "../../redux/actions";

const FilterDogs = (props) => {
  const { dogs, temperaments, setCurrentPage } = props;
  const dispatch = useDispatch();

  const filterByOrigin = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value) return;
    dispatch(dogsByOrigin(value));
    setCurrentPage(0);
  };

  const filterByTemperament = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value) return;
    dispatch(dogsByTemperament(value));
    setCurrentPage(0);
  };

  const filterByAlphabetical = (e) => {
    const value = e.target.value;
    dispatch(dogsByAlphabetical(value));
    setCurrentPage(0);
  };

  const filterByWeight = (e) => {
    const value = e.target.value;
    if (!value) return;
    dispatch(dogsByWeight(value));
    setCurrentPage(0);
  };

  return (
    <div className={styles.filterDogs}>
      <select name="origin" id="" onChange={filterByOrigin}>
        <option value="">Origin</option>
        {dogs.map(
          (dog) =>
            dog.origin && (
              <option key={dog.id} value={dog.origin} id={dog.origin}>
                {dog.origin}
              </option>
            )
        )}
      </select>
      <select name="temperaments" onChange={filterByTemperament} id="">
        <option value="">Temperaments</option>
        {temperaments.map((tem) => (
          <option key={tem.id} id={tem.name}>
            {tem.name}
          </option>
        ))}
      </select>
      <select name="weight" onChange={filterByWeight} id="">
        <option value="">Weight</option>
        <option value="L-w">L-w</option>
        <option value="W-l">W-l</option>
      </select>
      <select name="alphabetical" id="" onChange={filterByAlphabetical}>
        <option value="A-z">A-z</option>
        <option value="Z-a">Z-a</option>
      </select>
    </div>
  );
};

export default FilterDogs;
