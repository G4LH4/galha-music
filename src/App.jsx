import "./App.css";

// components
import MainDiv from "./components/maindiv";

function App() {
  return (
    <div className="App">
      <div className="flex" id="container">
        <div id="side-section" className="bg-gray-700 h-screen p-10 ">
          <h1>Galha music</h1>
        </div>
        <div id="main-section">
          <MainDiv />
        </div>
      </div>

      <div
        id="bottom-section"
        className="bg-blue-600 p-10 fixed bottom-0 w-full "
      >
        <h1>Play</h1>
      </div>
    </div>
  );
}

export default App;
