import "./App.css";
import FactButtons from "./components/FactButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Funfact from "./components/Funfact";
import ForecastButton from "./components/ForecastButton";
import ClothesRec from "./components/ClothesRec";


/* -5, 0, 5, 10, 15, 20, 30 */
/* Great wall, machu pichu, taj mahal, christ the redeemer, petra, chicken itza, colosseum, */


function App() {

  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  /* This array contains each fun facts of the seven wonders of the world and the temperature threshold */
  const info = [
    {
      /* Great wall */
      tempC: -5, 
      tempK: 23,
      fact: "There is a wide misconception that the Great Wall was built" + 
      " under the order of Emperor Qin Shi Huang (259 - 210BC), but it is not true." +
      " The fact is that the initial construction was 2,700 years ago during the Spring " +
      "and Autumn Period (770 - 276BC). The fortifications built by Chu State during the " +
      "7th century BC have been proven to be the earliest Great Wall. The last construction " +
      "was in 1878 in the late Qing Dynasty. The Great Wall of China became a UNESCO World Heritage " +
      "Site in December 1987. The wall is the longest man made structure in the world, with a total length " +
      "of about 13170.7 mi or 21196.18 km. Made over the course of hundreds of years, the wall was built by over " +
      "6 different Chinese dynasties, and is over 2,300 years old",
    },
    
    {
      /* Machu pichu */
      tempC: 0,
      tempK: 32,
      fact: "In 2007, Machu Picchu was voted one of the New Seven Wonders of the World. "+
      "Known to some as a ‘lost city’, in fact there were several farming families living " +
      "in the surrounds of Machu Picchu when it was discovered by the explorer Hiram Bingham " +
      "in 1911. Recent research points to many locals being aware of the site before it was " +
      "catapulted into public popularity. The Inca empire was one of the largest in pre-Columbian " +
      "America covering Argentina, Bolivia, Chile and Ecuador Inca means ‘king’ or ‘emperor’ and " +
      "the word carried weight throughout modern-day South America. At the height of the empire, " +
      "the Incas were the backbone of the Andes ruling over more than 20 million people between " +
      "the 1400s-1500s. It all came to an end when the emperor Atahualpa was killed by Spanish " +
      "conquistadors in 1533."
    },

    {
      /* Taj mahal */
      tempC: 5,
      tempK: 41,
      fact: "The Taj Mahal, often regarded as the symbol of true love, has been attracting " +
      "travellers from across the globe for its gorgeous beauty and splendid history. " +
      "The monument of love is also one of the Seven Wonders of the World and is the country’s " +
      "most visited tourist attraction. The beautiful white marble structure is a perfect " +
      "amalgamation of Persian, Islamic and Indian architecture. It is believed that around " +
      "INR 32 million was spent to complete the construction of this white mausoleum (in 1653). " +
      "Today, the cost of building the Taj would be somewhere around INR 70 billion (nearly $1 billion). " +
      "The Taj Mahal is adorned with more than 40 types of precious and semi-precious stones, " +
      "including pearls, diamonds, emeralds and sapphires, among others."
    },

    {
      /* Christ The Redeemer */
      tempC: 10,
      tempK: 50,
      fact: "Christ the Redeemer is a statue of Jesus Christ, located in Rio de Janeiro, " +
      "Brazil. It sits atop Mount Corcovado, which means “hunchback” in Portuguese. This 2310 " +
      "feet (704 metres) granite peak is a part of the Carioca Range. It is nestled in the Tijuca " +
      "Forest National Park, a rainforest within the city’s boundaries. The Roman Catholic " +
      "archdiocese of Rio de Janeiro commissioned the statue. Polish-French sculptor Paul Landowski " +
      "created the statue. Brazilian engineer Heitor da Silva Costa built the statue in collaboration " +
      "with the French engineer Albert Caquot. Romanian artist Gheorghe Leonida created the statue’s " +
      "face. The original sketch was of Christ carrying a large cross in one hand and a globe in the " +
      "other. The statue earned the nickname ‘Christ with a ball’. In the end, after surveying the " +
      "land, a design was decided upon of Christ with his arms wide open in an Art Deco style."
    },

    {
      /* Petra */
      tempC: 15,
      tempK: 59,
      fact: "Petra is believed have been established in 312 BC, making it one of the " +
      "oldest cities in the world. It was the capital city of Nabateans, who were ancient " +
      "southern Arab people that arrived in Jordan around the 6th century BC. They were " +
      "essentially the makers of one of the most extraordinary prehistoric civilisations. Along " +
      "with the Great Wall of China, Peru’s Machu Picchu, India’s Taj Mahal, the Roman Colosseum " +
      "in Italy, Mexico’s Chichen Itza and Brazil’s Christ the Redeemer, Petra was named one the " +
      "New Seven Wonders of the World in 2007. Approximately only 15% of Petra has been explored by " +
      "archaeologists, which therefore means that there is still plenty to be revealed. To enter Petra, " +
      "you need to go through a narrow gorge called the Siq, which is around 1km long. " +
      "It is bound by cliffs each side which are around 8 metres high."
    },

    {
      /* Chichen Itza */
      tempC: 20,
      tempK: 68,
      fact: "Chichen Itza is an ancient Mayan city in the Yucatan peninsula of Mexico. It is " +
      "located at a distance of 120 miles (200 km) from the resort town of Cancun; therefore, " +
      "often included as a day trip on Cancun itineraries. The historic site is home to one of the " +
      "most stunning pyramids that the Mayans ever built. It is called the El Castillo or the Temple " +
      "of Kukulcan and is literally the symbol of Chichen Itza. Yet, it is home to so many more " +
      "interesting monuments such as the Temple of Warriors, a rotund observatory, a huge ball court, " +
      "even a market!"
    },

    {
      /* Colosseum */
      tempC: 30,
      tempK: 86,
      fact: "The Colosseum was built between 72 A.D and 80 A.D under the Emperor Vespasian, in the heart " +
      "of Ancient Rome. Made from stone and concrete, this magnificent monument was built with the man " +
      "power of tens of thousands of slaves. The Colosseum is the largest amphitheater (meaning “theatre " +
      "in the round”) in the world! Oval in shape, it measures 189m long, 156m wide and 50m high " +
      "(about the height of a 12 storey building). This ancient sporting arena could easily fit a " +
      "modern day football pitch inside! This brilliant building had 80 entrances and could seat " +
      "approximately 50,000 spectators who would come to watch sporting events and games. " +
      "These events included gladiatorial combats, wild animal hunts and, believe it or not, " +
      "ship naval battles!"
    }
  ]
  
  /* This is to fetch the weather data */
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      await getFormattedWeatherData({ ...query, units }).then((data) => {

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  /* To change the fun fact depending on the weather threshold */
  const factTurn = () => {
    if (weather.temp <= info[0].tempC) return info[0].fact;
    if (weather.temp > info[0].tempC && weather.temp <= info[1].tempC) return info[1].fact;
    if (weather.temp > info[1].tempC && weather.temp <= info[2].tempC) return info[2].fact;
    if (weather.temp > info[2].tempC && weather.temp <= info[3].tempC) return info[3].fact;
    if (weather.temp > info[3].tempC && weather.temp <= info[4].tempC) return info[4].fact;
    if (weather.temp > info[4].tempC && weather.temp <= info[5].tempC) return info[5].fact;
    if (weather.temp > info[5].tempC && weather.temp <= info[6].tempC) return info[6].fact;

  }

  /* To recommend clothing suggestion depending on the temperature */
  const clothesReccomendation = () => {
    const cold = units === "metric" ? info[3].tempC : info[3].tempK ;
    const mild = units === "metric" ? info[4].tempC : info[4].tempK ;
    if (weather.temp <= cold ) return "It's very cold outside. You should wear a thick jacket and scarfs if you're going out.";
    if (weather.temp > cold && weather.temp < mild) return "It's not too cold, but you should still wear a light jacket/coat if I were you. It might get colder in the evening"
    if (weather.temp > mild) return "It's very warm outside, you will be needing your best shirt to show off to the world!"
  }
  
  /* To change the background depending on the weather threshold */
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";
    return "from-yellow-700 to-orange-700";
  };
  
  /* This is the index of the page to differentiate the forecast and fun fact page */
  const [currentIndex, setCurrentIndex] = useState(0)

  /* Function for the next page fun fact button */
  function next() {
    const nextIndex = 1;
    setCurrentIndex(nextIndex);
  }

  /* Function for the previous page forecast button */
  function prev() {
    setCurrentIndex(0);
  }

  /* If the index is 1, go to the fun fact page with clothing reccomendation*/
  if (currentIndex === 1) {
    return (
      <div
    className={`mx-auto max-w-screen-md mt-4 pt-5 pb-32 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    > 
      <ForecastButton onClick={prev}/>
      <Funfact message={factTurn()}/>
      <ClothesRec message={clothesReccomendation()} />
    </div>
    )
  }

  /* Else, show the forecast page */
  return (
    <div
    className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <FactButtons onClick={next}/>
      <div className="text-white flex flex-row text-3xl justify-center">Forecast</div>

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
