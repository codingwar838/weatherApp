import Container from "@/components/container/Container";
import Search from "@/components/search/Search";
import SkeletonLoader from "@/components/skeletonLoader/SkeletonLoader";
import WeatherInfo from "@/components/weatherInfo/WeatherInfo";
import { IWeather } from "@/types";
import api from "@/utils/api";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("Lagos");
  const [weather, setWeather] = useState<null | IWeather>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await api.get(
        `/data/2.5/weather?q=${search}&appid=${API_KEY}`
      );

      const weatherInfo = {
        city: data?.data?.name,
        windSpeed: data?.data?.wind?.speed,
        temp: data?.data?.main?.temp,
        humidity: data?.data?.main?.humidity,
        weatherCondition: data?.data?.weather[0]?.main,
      };

      setWeather(weatherInfo);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section className="py-10">
        <Container>
          <div className="flex justify-center">
            <div className="w-full lg:w-[70%] flex flex-col gap-10">
              <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
              />
              {loading ? <SkeletonLoader /> : <WeatherInfo weather={weather} />}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
