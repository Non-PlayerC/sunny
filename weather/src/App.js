import logo from "./logo.svg";
import "./App.css";
import Search from "./components/search/search";

function App() {
  const handleOnSearchChange = (searchDtata) => {
    console.log(searchDtata);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
