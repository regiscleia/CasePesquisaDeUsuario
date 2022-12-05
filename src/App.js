import "./App.css";
import GlobalState from "./global/GlobalState";
import { Headers } from "./Pages/Headers";
import { PaginaPesquisa } from "./Pages/PaginaPesquisa";
import { Router } from "./routes/Router";

function App() {
  return (
    <div>
      <GlobalState>
        <Headers />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
