import { useState, useContext } from "react";
import { Search } from "react-bootstrap-icons";
import { SomeContext } from "../SomeContext";

function SearchField() {
  const [searchText, setSearchText] = useState(""),
    eventResult = useContext(SomeContext)?.eventResult,
    setFilteredEvents = useContext(SomeContext)?.setFilteredEvents;

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (eventResult) {
      const searchFilter = eventResult.filter((event) =>
        event.name.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(searchFilter);
      setFilteredEvents?.(searchFilter);
    }
  }

  return (
    <form className="SearchField-form" onSubmit={handleSubmit}>
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
