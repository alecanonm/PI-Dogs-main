import { connect, useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { addDogsByName, addDogsOnSearch } from "../../redux/actions";
import { useState } from "react";

const SearchBar = (props) => {
  const { dogsOnSearch } = props;
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    setTimeout(() => {
      dispatch(addDogsOnSearch(value));
    }, 500);
  };

  const onClickHandler = () => {
    dispatch(addDogsByName(input));
    setInput("");
  };

  const suggestionMenu = dogsOnSearch && dogsOnSearch.length > 0 && (
    <div className={styles.suggestions}>
      <ul>
        {dogsOnSearch.map(
          (dog) =>
            dog.name.includes(input) && (
              <a href={`/detail/${dog.id}`} key={dog.id}>
                <li>{dog.name}</li>
              </a>
            )
        )}
      </ul>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <button onClick={onClickHandler}>
          <FaSearch />
        </button>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="Search"
          value={input}
        />
      </div>
      {input.length > 0 && suggestionMenu}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dogsOnSearch: state.dogsOnSearch,
  };
};

export default connect(mapStateToProps, null)(SearchBar);
