import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>

      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}℃</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">详细</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">居住温度</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}℃
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">风速</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">湿度</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">压强</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
