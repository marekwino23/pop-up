import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from './components/Main';
import Order from "./components/Order";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;
