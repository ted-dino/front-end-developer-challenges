import Search from "./components/search/SearchForm";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import WeatherDetails from "./components/weatherDetails/index";

const App = () => {
  return (
    <main className="relative 2xl:container mx-auto overflow-hidden grid grid-cols-1 lg:grid-cols-[450px_1fr]">
      <Search />
      <CurrentWeather />
      <WeatherDetails />
    </main>
  );
};

export default App;
