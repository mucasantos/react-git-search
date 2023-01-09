import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./Context/github/GithubContext";

import { AlertProvider } from "./Context/alert/AlertContext";
import AlertApp from "./components/layout/AlertApp";
import User from "./pages/User";

function App() {
  return (
  <GithubProvider>
    <AlertProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container  mx-auto px-3 pb-12">
          <AlertApp />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/user/:login" element={<User />}></Route>
            <Route path="/notfound" element={<NotFound />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
    </AlertProvider>
  </GithubProvider>
  );
}

export default App;
