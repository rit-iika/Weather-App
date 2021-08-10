import { useDispatch, useSelector } from "react-redux";
import { updatePlaceData, updatePlace } from "../Actions";
const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            placeholder="enter your place"
            value={place}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <br />

          <button className="btn btn-primary" 
          onClick={() => {
            dispatch(updatePlaceData(place))
          }}>
            click here
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
