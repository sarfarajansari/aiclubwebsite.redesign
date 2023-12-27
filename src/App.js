import Committee from "./components/committee/committee";
import ContactPage from "./components/contactPage/contactPage";
import EventsList from "./components/eventsList/eventsList";
import Header from "./components/header/header";
import HighlightedEvent from "./components/highlightedEvent/highlightedEvent";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      <HighlightedEvent />
      <EventsList />
      <Committee />
      <ContactPage />
    </div>
  );
}

export default App;
