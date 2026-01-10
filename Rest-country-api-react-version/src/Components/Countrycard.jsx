import Countrycardimage from "url:../../resources/card-design.png";
import Icons from "url:../../public/icons.svg";

export default function Card({ currentCountriesData, isDarkThemeOn }) {
  if (!currentCountriesData) {
    return <div>no Countries available!</div>;
  }
  const slicedCountriesData =
    currentCountriesData.length > 10
      ? currentCountriesData.slice(0, 10)
      : currentCountriesData;
  const numberFormatter = new Intl.NumberFormat("en-IN", {
    notation: "compact",
    compactDisplay: "short",
  }); //by saving it here the fomatter will not be created multiple times.
  const compactFormatter = (num) => numberFormatter.format(num);

  function currencyEvaluate(currency) {
    const keys = Object.keys(currency);
    if (keys.length === 1) {
      return <b>{`${keys[0]} `}</b>;
    } else if (keys.length > 1) {
      const extraKeys = keys.slice(1);
      return (
        <b>
          {`${keys[0]} `}
          <span
            title={extraKeys.join(", ")}
            className="text-red-600 dark:text-blue-500 cursor-wait"
          >
            {extraKeys.length}+
          </span>
        </b>
      );
    }
    return <b>N/A</b>;
  }

  return (
    <div className="py-5 flex flex-wrap gap-6 items-center justify-around w-full">
      {slicedCountriesData.map((country, i) => {
        return (
          <div
            key={++i}
            className=" bg-secondary dark:bg-dark-theme-secondary w-58 p-2.5 rounded-3xl border-2 border-[#e5e7eb] dark:border-[#2a2b31] hover:scale-102 transition-transform duration-50"
          >
            <div
              className={`h-30 mb-2 rounded-2xl bg-cover bg-center shadow-sm border-b-3 border-amber-300`}
              style={{ backgroundImage: `url(${country.flags.svg})` }}
            ></div>
            <h5 className="font-bold">{country.name.common}</h5>
            <div className="flex justify-between pb-5 pt-3">
              {/* sub-info box one */}
              <div className="flex gap-x-2 items-center">
                <div>
                  <svg
                    className="size-8 stroke-2 block"
                    style={{
                      "--piggyMain": `${isDarkThemeOn ? "#222226" : "#7c5a00"}`,
                    }}
                  >
                    <use href={`${Icons}#currencyPiggy`}></use>
                  </svg>
                </div>
                <span>
                  <p className="text-[0.8em] opacity-80 font-medium">
                    Currency
                  </p>
                  {currencyEvaluate(country.currencies)}
                </span>
              </div>
              {/* sub-info box two */}
              <div className="flex gap-x-2 items-center">
                <svg className="size-6.5 fill-amber-400 block">
                  <use
                    style={{
                      "--earthOnly": `${isDarkThemeOn ? "#222226" : "#7c5a00"}`,
                    }}
                    href={`${Icons}#earth`}
                  ></use>
                </svg>
                <span>
                  <p className="text-[0.8em] opacity-80 font-medium">
                    Population
                  </p>
                  <b>{`${compactFormatter(country.population)}`}</b>
                </span>
              </div>
            </div>

            <button className="text-center text-white text-[0.8em] font-bold py-1.5 rounded-[0.8em] bg-[#00B164] bg-linear from-[#00B164] from-50% to-[#3d894a] w-full hover:scale-102">
              View Country
            </button>
          </div>
        );
      })}
    </div>
  );
}
/* //use india details to create card later
const indiaDetails = {
  name: {
    common: 'India',
    official: 'Republic of India',
    nativeName: {
      eng: {
        official: 'Republic of India',
        common: 'India',
      },
      hin: {
        official: 'भारत गणराज्य',
        common: 'भारत',
      },
      tam: {
        official: 'இந்தியக் குடியரசு',
        common: 'இந்தியா',
      },
    },
  },
  tld: ['.in'],
  cca2: 'IN',
  ccn3: '356',
  cioc: 'IND',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: {
    INR: {
      symbol: '₹',
      name: 'Indian rupee',
    },
  },
  idd: {
    root: '+9',
    suffixes: ['1'],
  },
  capital: ['New Delhi'],
  altSpellings: [
    'IN',
    'Bhārat',
    'Republic of India',
    'Bharat Ganrajya',
    'இந்தியா',
  ],
  region: 'Asia',
  subregion: 'Southern Asia',
  languages: {
    eng: 'English',
    hin: 'Hindi',
    tam: 'Tamil',
  },
  latlng: [20, 77],
  landlocked: false,
  borders: ['BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK'],
  area: 3287263,
  demonyms: {
    eng: {
      f: 'Indian',
      m: 'Indian',
    },
    fra: {
      f: 'Indienne',
      m: 'Indien',
    },
  },
  cca3: 'IND',
  flag: '🇮🇳',
  maps: {
    googleMaps: 'https://goo.gl/maps/WSk3fLwG4vtPQetp7',
    openStreetMaps: 'https://www.openstreetmap.org/relation/304716',
  },
  population: 1417492000,
  gini: {
    2011: 35.7,
  },
  fifa: 'IND',
  car: {
    signs: ['IND'],
    side: 'left',
  },
  timezones: ['UTC+05:30'],
  continents: ['Asia'],
  flags: {
    png: 'https://flagcdn.com/w320/in.png',
    svg: 'https://flagcdn.com/in.svg',
    alt: 'The flag of India is composed of three equal horizontal bands of saffron, white and green. A navy blue wheel with twenty-four spokes — the Ashoka Chakra — is centered in the white band.',
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/in.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/in.svg',
  },
  startOfWeek: 'monday',
  capitalInfo: {
    latlng: [28.6, 77.2],
  },
  },
}; */
