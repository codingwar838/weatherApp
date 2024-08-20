import { IWeather } from "@/types";
import { IoSunnyOutline } from "react-icons/io5";
import { IoCloudyOutline } from "react-icons/io5";

interface WeatherInfoProps {
  weather: IWeather | null;
}

const WeatherInfo = ({ weather }: WeatherInfoProps) => {
  return (
    <div className="w-full px-5 py-5 lg:py-2 flex flex-col lg:flex-row justify-between gap-5 bg-white shadow-lg">
      <h1 className="lg:hidden text-xl font-bold">Weather Report</h1>
      <div className="flex items-center gap-2">
        {weather?.weatherCondition === "Clouds" ? (
          <IoCloudyOutline size={25} className="text-orange-500" />
        ) : (
          <IoSunnyOutline size={25} className="text-orange-500" />
        )}
        <span>{weather?.weatherCondition}</span>
      </div>
      <div>
        City: <span>{weather?.city}</span>
      </div>
      <div>Wind speed: {weather?.windSpeed}</div>
      <div>Condition: {weather?.weatherCondition}</div>
      <div>Humidity: {weather?.humidity}</div>
    </div>
  );
};

export default WeatherInfo;
