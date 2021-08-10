import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Actions";
const Theme = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="theme">
      <button
        className={theme ? "btn btn-light" : "btn btn-dark"}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
};
export default Theme;
