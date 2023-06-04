import "./App.css";
import AddAccount from "./components/AddAccount/AddAccount";
import ViewAccount from "./components/ViewAccount/ViewAccount";

function App() {
  return (
    <>
      <header className="App-header">가계부</header>
      <section className="App-section">
        <div className="calendar-container">
          <ViewAccount />
        </div>
        <div className="setting-container">
          <AddAccount />
        </div>
      </section>
      <footer className="App-footer">All right reserved</footer>
    </>
  );
}

export default App;
