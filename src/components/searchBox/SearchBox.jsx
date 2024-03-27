import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchContact = useSelector((state) => state.filters.filterValue);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchWrapper}>
      <p className={css.heading}>Find contact by name:</p>
      <input
        className={css.searchBox}
        type="text"
        placeholder="Type contact's name..."
        title="Type contact's name"
        value={searchContact}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
