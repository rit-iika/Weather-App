const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place
  };
};
const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b20b056187ad4060ac1181923210608&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setPlaceData(data);
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data
        });
      });
  };
};
const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME"
  };
};
export { updatePlace, updatePlaceData, toggleTheme };
