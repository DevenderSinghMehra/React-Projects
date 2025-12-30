import { useState } from 'react';

export default function Searchpanel({ countriesData }) {
  const [inputValue, setinputValue] = useState('');
  const [filterToggle, setfilterToggle] = useState(false);
  const [currentContriesData, setcurrentContriesData] = useState(countriesData);
  // console.log(countriesData);

  function checkinputValueMatchesToAnyCountries(value) {
    if (value && value !== ' ') {
      const result = countriesData.filter((country) => {
        return country.name.common.toLowerCase().includes(value.toLowerCase());
      });
      setcurrentContriesData(result); //like i will be able to get all the matching countries.if wanted i can also specify to sliced but that is not good and needed.
      const resultSliced = result.slice(0, 10);
      // console.log(value,':value', value !== ' ');
      return resultSliced;
    }
    return '';
  }
  // console.log(checkinputValueMatchesToAnyCountries());
  function filterCountriesForSearchBarSuggestion(resultSliced) {
    return resultSliced.map((country, i) => {
      return (
        <a
          key={++i}
          className="cursor-pointer block px-[0.6em] py-[0.65em] bg-white hover:bg-red-50 dark:bg-dark-theme-secondary dark:hover:bg-red-500"
          href={`/country-detailed.html?name=${country.name.common}`}
        >
          {country.name.common}
        </a>
      );
    });
  }
  function filterCountriesByRegion(region) {
    const result = currentContriesData.filter((country) => {
      return country.region.toLowerCase().includes(region.toLowerCase());
    });
    return console.log(result); //return country cards now.;
  }
  return (
    <div className={`flex px-3 gap-x-2 justify-between items-start`}>
      <div className={`max-w-96 ${filterToggle ? '' : 'w-full'}`}>
        <form
          className={`${
            filterToggle ? '' : 'flex'
          } bg-white dark:bg-dark-theme-secondary rounded-1 ${
            Boolean(inputValue.length) ? 'rounded-b-none border-b-[0.2em]' : ''
          }`}
        >
          <button
            className="p-3.5"
            type="submit"
            disabled={filterToggle ? true : false}
            title={`${
              filterToggle
                ? 'Close Filter To Use Search'
                : 'Search For A Country'
            }`}
          >
            {filterToggle ? (
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                // aria-label='hello'
                className="size-5 md:size-6.5 cursor-pointer"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <circle cx="63.93" cy="64" r="60" fill="#c33"></circle>
                  <circle cx="60.03" cy="63.1" r="56.1" fill="#f44336"></circle>
                  <path
                    d="M23.93 29.7c4.5-7.1 14.1-13 24.1-14.8c2.5-.4 5-.6 7.1.2c1.6.6 2.9 2.1 2 3.8c-.7 1.4-2.6 2-4.1 2.5a44.64 44.64 0 0 0-23 17.4c-2 3-5 11.3-8.7 9.2c-3.9-2.3-3.1-9.5 2.6-18.3z"
                    fill="#ff8a80"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                className={`size-5 md:size-6.5 cursor-pointer fill-black  dark:fill-white ${
                  inputValue ? '' : 'opacity-50'
                } hover:opacity-100`}
                //one of the limitation that is still there is, on input focus it does not get to opacity-100 fix it later. 
              >
                <path d="M1 17.838c0 8.747 7.131 15.827 15.94 15.827c8.796 0 15.938-7.08 15.938-15.827S25.736 2 16.94 2C8.131 2 1 9.091 1 17.838zm5.051 0c0-5.979 4.868-10.817 10.89-10.817c6.01 0 10.888 4.839 10.888 10.817c0 5.979-4.878 10.818-10.888 10.818c-6.022 0-10.89-4.84-10.89-10.818zm22.111 14.523l6.855 7.809c1.104 1.102 1.816 1.111 2.938 0l2.201-2.181c1.082-1.081 1.149-1.778 0-2.921l-7.896-6.775l-4.098 4.068z" />
              </svg>
            )}
          </button>
          {filterToggle ? (
            ''
          ) : (
            <input
              className="outline-0 w-full pr-3.5"
              onInput={(e) => {
                setinputValue(
                  checkinputValueMatchesToAnyCountries(e.target.value)
                );
              }}
              onFocus={(e) => {
                setinputValue(
                  checkinputValueMatchesToAnyCountries(e.target.value)
                );
                // console.log(Boolean(e.target.value), e.target.value);
              }}
              onBlur={() => {
                setinputValue(''); //empty array can also be used, but i think it is heavy then empty string.
                // e.target.value = '';//i don't think it is usefull but i am leaving it as it can be done as well.
              }}
              // id="search-bar-input" add if you think it is usefull else discard.
              type="text"
              placeholder="Search for a country..."
            />
          )}
        </form>
        {Boolean(inputValue.length) ? (
          <div className="search-bar-suggestion__list font-medium [&>a+a]:border-t-[#fafafa] dark:[&>a+a]:border-t-dark-theme-secondary [&>a+a]:border-t-[0.15em] [&>a:last-child]:rounded-b-1">
            {filterCountriesForSearchBarSuggestion(inputValue)}
          </div>
        ) : (
          ''
          // console.log('bro the user input is not focused! or they have not made any inputs.')
        )}
      </div>
      <div className={`${filterToggle ? 'w-full max-w-96 md:max-w-56' : ''} `}>
        <div
          className={`rounded-1 bg-white dark:bg-dark-theme-secondary ${
            filterToggle
              ? 'flex items-center pl-2 justify-between rounded-b-none border-b-[0.2em] '
              : ''
          }`}
        >
          {filterToggle ? (
            <p className={`$`}>
              <b>Filter By Region</b>
            </p>
          ) : (
            ''
          )}

          <div
            className="cursor-pointer p-2 md:p-2.5"
            onClick={() => {
              setfilterToggle(!filterToggle);
              // console.log(!filterToggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-black dark:fill-white size-8 md:size-8.5"
            >
              <g>
                <path d="M17 5a3 3 0 1 1 3 3 3 3 0 0 1-3-3zM2 6h12a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm6 3a3 3 0 0 0-2.82 2H2a1 1 0 0 0 0 2h3.18A3 3 0 1 0 8 9zm14 2h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-12 7H2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm12 0h-3.18a3 3 0 1 0 0 2H22a1 1 0 0 0 0-2z"></path>
              </g>
            </svg>
          </div>
        </div>
        {filterToggle ? (
          <div className="search-bar-suggestion__list font-medium [&>span+span]:border-t-[#fafafa] dark:[&>span+span]:border-t-dark-theme-secondary [&>span+span]:border-t-[0.15em] [&>span:last-child]:rounded-b-1">
            {[
              'Asia',
              'Europe',
              'North America',
              'South America',
              'Africa',
              'Caribbean',
              'Central America',
              'Oceania',
            ].map((region, i) => {
              return (
                <span
                  key={++i}
                  className="cursor-pointer block px-[0.6em] py-[0.65em] bg-white hover:bg-red-50  dark:bg-dark-theme-secondary dark:hover:bg-red-500"
                  onClick={() => {
                    filterCountriesByRegion(region);
                  }}
                >
                  {region}
                </span>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
