// import { useState } from 'react';
export default function Navbar({ isDarkThemeOn, themeChangingFunction }) {
  return (
      <div className="bg-white dark:bg-dark-theme-secondary radius-1 mb-3 md:mb-6">
        <nav className="1xl:m-auto max-w-[1440px] flex justify-center items-center px-5 md:px-12 py-4 dark:text-white ">
          <h1 className=" text-[1.2rem] md:text-2xl font-bold mr-5">
            <a href="index.html">Where in the world ?</a>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1728 1792"
            className="size-5 md:size-7 cursor-pointer fill-black  dark:fill-white "
            onClick={() => themeChangingFunction()} //funfact: if i passed themeChanger without arrow function then it will create a infinite loop.
          >
            {isDarkThemeOn ? (
              <path d="M1464 1090q-94 203-283 323.5T768 1536q-157-1-299-62t-244.5-163.5T61 1066T0 768q0-205 97.5-378t267-276.5T738 2q43-2 62 38q17 42-16 72q-176 164-176 400q0 111 43 211.5t115 173t172.5 116T1151 1056q119 0 228-51q41-18 72 13t13 72z" />
            ) : (
              <path d="M873 416q-130 0-240.5 64.5t-175 175T393 896t64.5 240.5t175 175T873 1376t240.5-64.5t175-175T1353 896t-64.5-240.5t-175-175T873 416zm853 757q0 6-7 12t-13 8l-293 97v306q0 16-13 26q-14 9-29 4l-292-94l-180 248q-9 12-26 12t-26-12l-180-248l-292 94q-15 5-29-4q-12-8-14-26v-306l-292-97q-16-5-20-20q-5-16 4-29l180-248L24 648q-9-13-4-29q4-15 20-20l292-97V196q2-18 14-26q14-9 29-4l292 94L847 12q9-12 26-12t26 12l180 248l292-94q15-5 29 4q13 10 13 26v306l293 97q6 2 13 8t7 12q4 15-4 29l-181 248l181 248q8 14 4 29zm-277-277q0-157-77-289.5T1162.5 397T873 320t-289.5 77T374 606.5T297 896q0 118 46 225t123 184t183.5 122.5T873 1473q158 0 290.5-77.5t209-210T1449 896z" />
            )}
          </svg>
        </nav>
      </div>
  );
}
