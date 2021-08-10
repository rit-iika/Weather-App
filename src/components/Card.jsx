import { useSelector } from "react-redux";
const Card = () => {
  const placeData = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-10 col-md-4 weather">
          <div className={theme ? "card dark" : "card"}>
            {/* <h3>place not found</h3>*/}
            {placeData.location ? (
              <div className="city">
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}°</div>
                {placeData.current.condition.text}
                <h2 className="cityname">{placeData.location.name}</h2>
                {/* <h2>{placeData.location.region}</h2> */}
                {/* <h2>{placeData.location.country}</h2> */}
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="title">humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">KMS</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">wind speed</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="title">precipitation</div>
                      <div className="data">
                        {placeData.current.precip_in}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>place not found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
