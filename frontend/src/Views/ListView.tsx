import BigEventCard from "../Components/BigEventCard";
import SearchField from "../Components/SearchField";
import { SomeContext } from "../SomeContext";
import { useContext, useEffect, useState } from "react";
import { Sliders, ChevronDown } from "react-bootstrap-icons";
import styled from "styled-components";
import { Result } from "../useFetch";

function ListView() {
  const cityOptions: string[] = ["Göteborg", "Stockholm", "Malmö"],
    categoryOptions: string[] = ["Konsert", "Museum", "Friluftsliv"],
    [selectedCities, setSelectedCities] = useState<string[]>([]),
    [selectedCategories, setSelectedCategories] = useState<string[]>([]),
    [showPriceCheck, setShowPriceCheck] = useState(false),
    [showFilters, setShowFilters] = useState(false),
    [showCities, setShowCities] = useState(false),
    [showPrice, setShowPrice] = useState(false),
    [showCategory, setShowCategory] = useState(false),
    [isRotatedCity, setIsRotatedCity] = useState(false),
    [isRotatedPrice, setIsRotatedPrice] = useState(false),
    [isRotatedCategory, setIsRotatedCategory] = useState(false),
    eventResult = useContext(SomeContext)?.eventResult,
    filteredEvents = useContext(SomeContext)?.filteredEvents,
    setFilteredEvents = useContext(SomeContext)?.setFilteredEvents;

  useEffect(() => {
    console.log(filteredEvents);
    console.log(eventResult);
    if (filteredEvents) {
      if (filteredEvents?.length < 1 && eventResult) {
        setFilteredEvents?.(eventResult);
      }
    }
  }, [filteredEvents, eventResult, setFilteredEvents]);

  useEffect(() => {
    console.log(filteredEvents);
  }, [filteredEvents]);

  useEffect(() => {
    if (filteredEvents) {
      let filterArray: Result[] = filteredEvents;

      if (showPriceCheck) {
        filterArray = filterArray.filter((event) => event.cost === null);
      }

      // if (!showPriceCheck) {
      //   filterArray = [
      //     ...filterArray,
      //     ...filteredEvents.filter((event) => event.cost !== null),
      //   ];
      // }

      if (selectedCities.length > 0) {
        filterArray = filterArray.filter((event) =>
          selectedCities.includes(event.city)
        );
      }

      if (selectedCategories.length > 0) {
        filterArray = filterArray.filter((event) =>
          selectedCategories.includes(event.category)
        );
      }

      if (
        selectedCategories.length === 0 &&
        selectedCities.length === 0 &&
        !showPriceCheck
      ) {
        if (eventResult) {
          filterArray = eventResult;
        }
      }

      console.log(filterArray);
      console.log(selectedCategories);
      console.log(selectedCities);
      console.log(showPriceCheck);

      setFilteredEvents?.(filterArray);
    }
  }, [selectedCities, selectedCategories, showPriceCheck, eventResult]);

  function handleClick() {
    setShowFilters(!showFilters);
  }

  function handleCityClick() {
    setShowCities(!showCities);
    setIsRotatedCity(!isRotatedCity);
  }

  function handlePriceClick() {
    setShowPrice(!showPrice);
    setIsRotatedPrice(!isRotatedPrice);
  }

  function handleCategoryClick() {
    setShowCategory(!showCategory);
    setIsRotatedCategory(!isRotatedCategory);
  }

  const handleCityChange = (selectCity: string) => {
    if (selectedCities.some((city) => city === selectCity)) {
      setSelectedCities(selectedCities.filter((city) => city !== selectCity));
    } else {
      setSelectedCities([...selectedCities, selectCity]);
    }
  };

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.some((cat) => cat === category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <main className="main-divs">
      <SearchFieldDiv>
        <SearchField />
        <Sliders onClick={handleClick} className="Bootstrap-icons" />
        {showFilters && (
          <FilterDiv>
            <div>
              <div>
                <p>Stad</p>
                <ChevronDown
                  style={{
                    transform: isRotatedCity
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={handleCityClick}
                />
              </div>
              {showCities && (
                <CheckboxDiv>
                  {cityOptions.map((selectCity: string) => (
                    <label key={selectCity} className="checkbox-label">
                      <input
                        className="checkbox-input"
                        name={selectCity}
                        type="checkbox"
                        checked={selectedCities.some(
                          (city) => city === selectCity
                        )}
                        onChange={() => handleCityChange(selectCity)}
                      />
                      <span className="checkbox-span" />
                      {selectCity}
                    </label>
                  ))}
                </CheckboxDiv>
              )}
            </div>
            <div>
              <div>
                <p>Pris</p>
                <ChevronDown
                  style={{
                    transform: isRotatedPrice
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={handlePriceClick}
                />
              </div>
              {showPrice && (
                <CheckboxDiv>
                  <label className="checkbox-label">
                    <input
                      className="checkbox-input"
                      name="Gratis"
                      type="checkbox"
                      checked={showPriceCheck}
                      onChange={() => setShowPriceCheck(!showPriceCheck)}
                    />
                    <span className="checkbox-span" />
                    Gratis
                  </label>
                </CheckboxDiv>
              )}
            </div>
            <div>
              <div>
                <p>Kategori</p>
                <ChevronDown
                  style={{
                    transform: isRotatedCategory
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                  onClick={handleCategoryClick}
                />
              </div>
              {showCategory && (
                <CheckboxDiv>
                  {categoryOptions.map((category) => (
                    <label key={category} className="checkbox-label">
                      <input
                        className="checkbox-input"
                        name={category}
                        type="checkbox"
                        checked={selectedCategories.some(
                          (cat) => cat === category
                        )}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="checkbox-span" />
                      {category}
                    </label>
                  ))}

                  {/* <label className="checkbox-label">
                    <input
                      className="checkbox-input"
                      name="Museum"
                      type="checkbox"
                    />
                    <span className="checkbox-span" />
                    Museum
                  </label>
                  <label className="checkbox-label">
                    <input
                      className="checkbox-input"
                      name="Friluftsliv"
                      type="checkbox"
                    />
                    <span className="checkbox-span" />
                    Friluftsliv
                  </label> */}
                </CheckboxDiv>
              )}
            </div>
          </FilterDiv>
        )}
      </SearchFieldDiv>
      <div className="ListView-grid">
        {filteredEvents?.map((event) => (
          <BigEventCard key={event.id} eventprop={event}></BigEventCard>
        ))}
      </div>
    </main>
  );
}

const SearchFieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  position: relative;

  > svg {
    width: 30px;
    height: 30px;
    margin: 0;
  }
`;

const FilterDiv = styled.div`
  top: 60px;
  left: -16px;
  z-index: 8;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 108.7%;
  align-items: center;
  padding-bottom: 16px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  div > div {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: bold;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;

  .checkbox-label {
    display: block;
    /* display: flex; */
    /* align-items: center; */
    cursor: pointer;
    position: relative;
    padding-left: 45px;
    margin-bottom: 10px;
  }

  .checkbox-span {
    position: absolute;
    /* margin-right: 10px; */
    width: 26px;
    height: 26px;
    top: 0;
    left: 5px;
    background-color: #f1f1f1;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  .checkbox-label:hover input ~ .checkbox-span {
    background-color: #dfdfdf;
  }

  .checkbox-span:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-label input:checked ~ .checkbox-span:after {
    display: block;
  }

  .checkbox-label .checkbox-span:after {
    border: solid black;
    border-width: 0 2px 2px 0;
    height: 13px;
    left: 9px;
    top: 5px;
    transform: rotate(45deg);
    width: 7px;
  }

  .checkbox-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`;

export default ListView;

// till checkboxen
//
