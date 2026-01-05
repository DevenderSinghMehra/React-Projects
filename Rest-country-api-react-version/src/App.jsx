import Navbar from "./Components/Navbar.jsx";
import Searchpanel from "./Components/Searchpanel.jsx";
import Countrycard from "./Components/Countrycard.jsx";
import { useState } from "react";
export default function App() {
  const [countriesData, setcountriesData] = useState(null);
  const [currentCountriesData, setcurrentCountriesData] = useState(null);
  const [inputFocused, setinputFocused] = useState(false);
  setTimeout(() => {
    if (!countriesData) {
      fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,currencies"
      )
        .then((res) => res.json())
        .then((data) => {
          setcountriesData(data);
          setcurrentCountriesData(data)
        });
    } //the reason i have made it, 5s is because no state can be udated until component are mounted, and for that i have to set a time limit there is one more way to use `useEffect` but as of now i don't know it so i am douging it.
  }, 5000); //the reason i have settimed it, becuase i want the user to see my boring loading animation.

  //dark theme logic
  const isDarkLocalStorage = localStorage.getItem("isDark"); //funfact to i have kept this only to use the variable at 2 locations.

  const mediaQueryList =
    isDarkLocalStorage === null
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null; //anyway it is a limitation of code to not use system preference when local storage is enable, i have just made it explicit and saved some processing.
  const [isDark, setisDark] =
    isDarkLocalStorage === null
      ? useState(mediaQueryList.matches)
      : useState(JSON.parse(isDarkLocalStorage));
  if (isDarkLocalStorage === null) {
    mediaQueryList.onchange = (e) => {
      setisDark(e.matches);
    };
  } //the limitation of this is, only after a reload to site after user have explicity declare theri theme, it will be able to turn it off. maybe later i will patch it with react hooks.
  //there is one more limitation of the code the theme only obey system preference untill you be explicity onces you be explicit then you cannot go back -- i need to fix. it.
  function themeChanger() {
    // setisDark((e) => console.log(e));
    //iam little sad about using localStorage as a check, but i don't know any react suitable hook for this so i have to keep it like that.
    //i have used isDark because it is a useState so it will have fresh value.
    setisDark(!isDark);
    localStorage.setItem("isDark", !isDark);
  }
  if (!countriesData) {
    return (
      <div className="flex items-center justify-center w-full h-dvh">
        <div className="border-r-transparent border-4 size-12 rounded-full animate-spin "></div>
        <h1 className="ml-3 text-4xl">loading...</h1>
        {/* onces you got time commit to make this boring loding animaition classy */}
      </div>
    );
  }
  return (
    <div
      className={` bg-primary dark:bg-dark-theme-primary ${
        isDark ? "dark" : ""
      }`}
    >
      <div className={`fixed inset-0 bg-black/50 z-20 ${
          !inputFocused ? "hidden" : "block"
        } `}></div>
      <header className={` dark:text-white `}>
        <Navbar isDarkThemeOn={isDark} themeChangingFunction={themeChanger} />
        <Searchpanel setfocus={setinputFocused} countriesData={countriesData} setcurrentCountriesData={setcurrentCountriesData} />
      </header>
      <main className="dark:text-white">
        <Countrycard currentCountriesData={currentCountriesData} isDarkThemeOn={isDark} />
      </main>
    </div>
  );
}
