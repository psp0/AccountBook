import "./App.css";
import AddContainer from "./components/AddContainer/AddContainer";
import ViewContainer from "./components/ViewContainer/ViewContainer";

function App() {
  return (
    <div id="wrap">
      <div className="App basic-font">
        <header className="App-header">가계부</header>
        <div className="App-container">
          <ViewContainer />
          <AddContainer />
        </div>
        <footer className="App-footer">All right reserved</footer>
      </div>
    </div>
  );
}

export default App;
