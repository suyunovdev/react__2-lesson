import Header from "./components/header/Header";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Services from "./components/main/Services";
import Covid from "./components/main/Covid";
import Articles from "./components/main/Articles";
import Contact from "./components/main/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <About />
      <Services />
      <Covid />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
