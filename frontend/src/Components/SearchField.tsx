import { Search } from "react-bootstrap-icons";

function SearchField() {
  function handleSubmit() {}

  return (
    <form className="SearchField-form" onSubmit={handleSubmit}>
      <Search className="SearchField-icon" />
      <input className="SearchField-input" placeholder="Sök"></input>
    </form>
  );
}

export default SearchField;
