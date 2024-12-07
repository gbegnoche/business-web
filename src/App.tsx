import { useGlobalState } from "./providers/useGlobalState";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { state } = useGlobalState();

  return (
    <div id="app-container" data-theme={state.theme}>
      <Header />
      <div>
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
