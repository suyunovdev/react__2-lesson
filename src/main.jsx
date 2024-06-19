import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./scss/main.scss";
import "./components/header/Header.scss";
import "./components/main/Home.scss";
import "./components/main/About.scss";
import "./components/main/Services.scss";
import "./components/main/Covid.scss";
import "./components/main/Articles.scss";
import "./components/main/Contact.scss";
import "./components/footer/Footer.scss";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
