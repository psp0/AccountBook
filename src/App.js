import "./App.css";
import AddSection from "./components/Add/AddSection";
import ViewSection from "./components/View/ViewSection";

function App() {
  return (
    <>
      <header className="App-header">가계부</header>
      <section className="App-section">
        <ViewSection />
        <AddSection />
      </section>
      <footer className="App-footer">All right reserved</footer>
    </>
  );
}

export default App;
