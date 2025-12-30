import Countrycardimage from "url:../../resources/card-design.png";

export default function Card({ countriesData }) {
  const oneCountryDetail = countriesData[0];
  // console.log(oneCountryDetail,countriesData);
  // console.log(oneCountryDetail.flags.png);
  return (
    <div className="m-2 flex gap-x-6 items-center">
      <img style={{ maxWidth: "100%" }} src={Countrycardimage} />
      <div className=" bg-dark-theme-secondary w-56 p-3 rounded-3xl">
        <div
          className={`h-30 mb-2 rounded-2xl bg-cover bg-center`}
          style={{ backgroundImage:`url(https://saichintala.com/wp-content/uploads/2017/04/img_6996.jpg?w=3648&h=4721)`}}
        ></div>
        <h5 className="font-bold">{oneCountryDetail.name.common}</h5>
        <div className="flex justify-between pb-5 pt-3">
          {/* sub-info box one */}
          <div className="flex gap-x-2 items-center">
            <div>
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:fill-white fill-black size-10 stroke-2"
              >
                <g className="stroke-none"></g>
                <g
                  style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                ></g>
                <g>
                  <defs></defs>
                  <path
                    className="fill-none dark:stroke-white stroke-black"
                    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                    d="M8.0723,20.7261a12.4759,12.4759,0,0,1,3.6466-5.6695c-.9317-.7453,0-5.3767,0-5.3767s3.7264,1.65,4.3918,2.4221c0,0,2.8747-3.4868,11.2059-3.4868S43.5,15.0566,43.5,23.654s-6.2285,11.339-6.2285,11.339a19.9775,19.9775,0,0,1-1.4905,4.3918H32.48A21.3853,21.3853,0,0,1,31.07,36.8562s-2.6351.3194-4.525.3194a23.0513,23.0513,0,0,1-3.966-.4259,6.4031,6.4031,0,0,1-.9316,2.6351H18.0538c-1.1179-.9582-1.6769-3.9659-1.6769-3.9659S7.327,31.32,5.4105,28.871c-1.038-1.9431-.905-6.2551-.905-6.2551A7.9406,7.9406,0,0,1,8.0723,20.7261Z"
                  ></path>
                  <path
                    className="fill-none dark:stroke-white stroke-black"
                    style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
                    d="M19.5444,13.7789a11.5482,11.5482,0,0,1,7.3464-2.156,13.1871,13.1871,0,0,1,7.9852,2.5287"
                  ></path>
                  <circle
                    className="dark:fill-white fill-black"
                    cx="11.6124"
                    cy="21.285"
                    r="0.75"
                  ></circle>
                </g>
              </svg>
            </div>
            <span>
              <p className="text-[0.8em] opacity-80 font-medium">Currency</p>
              <b>rupee</b>
            </span>
          </div>
          {/* sub-info box two */}
          <div className="flex gap-x-2 items-center">
            <div className="size-6 rounded-full bg-white"></div>
            <span>
              <p className="text-[0.8em] opacity-80 font-medium">Population</p>
              <b>1M</b>
            </span>
          </div>
        </div>
        <button className="text-center text-[0.8em] font-bold py-1.5 rounded-[0.8em] bg-[#00B164] bg-radialO from-[#00B164] from-50% to-[#00993D] w-full">
          View Country
        </button>
      </div>
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
