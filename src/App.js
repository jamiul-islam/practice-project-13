import "./App.css";
import Advertise from "./Components/Advertise";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Banner />
      <Advertise />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
