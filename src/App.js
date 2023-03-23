import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Funfact from "./components/Funfact";
import HomeButton from "./components/HomeButton";
import ClothesRec from "./components/ClothesRec";


/* -5, 0, 5, 10, 15, 20, 30 */


function App() {

  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const info = [
    {
      id: 1,
      tempC: -5,
      tempK: 23
    },
    
    {
      id: 2,
      tempC: 0,
      tempK: 32
    },

    {
      id: 3,
      tempC: 5,
      tempK: 41
    },

    {
      id: 4,
      tempC: 10,
      tempK: 50
    },

    {
      id: 5,
      tempC: 15,
      tempK: 59
    },

    {
      id: 6,
      tempC: 20,
      tempK: 68
    },

    {
      id: 7,
      tempC: 30,
      tempK: 86
    }
  ]
  
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);


  const formatReccomendation = () => {
    /* 10 : 50 */
    /* 15 : 59 */
    const cold = units === "metric" ? info[3].tempC : info[3].tempK ;
    const mild = units === "metric" ? info[4].tempC : info[4].tempK ;
    if (weather.temp <= cold ) return "The weather is very cold. Wear something thick";
    if (weather.temp > cold && weather.temp < mild) return "It's a bit warm outside. Bring jacket just in case"
    if (weather.temp > mild) return "It's hot outside. Enjoy!"
  }

  const formatBackground = () => {
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/china_wall.png");
    const threshold = units === "metric" ? 5 : 41;
    if (weather.temp <= threshold) return url("vivinia7/GUI-Project/src/images/chicken Itza.png");
    const threshold = units === "metric" ? 10 : 50;
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/Christ the redeemer.png");
    const threshold = units === "metric" ? 15 : 59;
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/Colosseum.png");
    const threshold = units === "metric" ? 20 : 68;
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/machu_pichu.png");
    const threshold = units === "metric" ? 25 : 77;
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/Petra.png");
    const threshold = units === "metric" ? 30 : 86;
    if (weather.temp) return url("vivinia7/GUI-Project/src/images/taj mahal.png");

    return "from-yellow-700 to-orange-700";
  };

  const [currentIndex, setCurrentIndex] = useState(0)

  function next() {
    const nextIndex = 1;
    setCurrentIndex(nextIndex);
  }

  function prev() {
    setCurrentIndex(0);
  }

  if (currentIndex === 1) {
    return (
      <div
    className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    > 
      <HomeButton onClick={prev}/>
      <Funfact/>
      <ClothesRec message={formatReccomendation()} />
    </div>
    )
  }

  return (
    <div
    className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons onClick={next}/>
      <Inputs /*setQuery={setQuery} units={units} setUnits={setUnits} *//>

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
