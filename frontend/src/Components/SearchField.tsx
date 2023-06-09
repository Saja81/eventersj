import { useState, useContext, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import { SomeContext } from "../SomeContext";

function SearchField() {
  const [searchText, setSearchText] = useState(""),
    eventResult = useContext(SomeContext)?.eventResult,
    setFilteredEvents = useContext(SomeContext)?.setFilteredEvents;

  useEffect(() => {
    if (eventResult) {
      let searchFilter = eventResult.filter((event) =>
        event.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(searchFilter);
      setFilteredEvents?.(searchFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, eventResult]);

  return (
    <form className="SearchField-form">
      <Search className="SearchField-icon" />
      <input
        className="SearchField-input"
        placeholder="Sök"
        onChange={(event) => setSearchText(event.target.value)}
      ></input>
    </form>
  );
}

export default SearchField;
