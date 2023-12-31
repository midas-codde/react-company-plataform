import "../src/styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Employees from "./pages/Employees";
import Statistics from "./pages/Statistics";
import Tables from "./pages/Tables";
import Wallet from "./pages/Wallet";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element= {<Auth />}/>
            <Route path="/estatisticas" element= {<Statistics />}/>
            <Route path="/tabelas" element= {<Tables />}/>
            <Route path="/compras" element= {<Wallet />}/>
            <Route path="/funcionarios" element= {<Employees />}/>
            <Route path="/chat" element= {<Chat />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
