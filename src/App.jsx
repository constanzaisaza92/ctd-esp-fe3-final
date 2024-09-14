import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/contacto" Component={Contact} />
            <Route path="/dentista/:id" Component={Detail} />
            <Route path="/favs" Component={Favs} />
            <Route path="/home" Component={Home} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
