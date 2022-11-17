import "./App.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import axios from 'axios'

axios.defaults.baseURL = 'http://api.themoviedb.org/3'
axios.defaults.params = {
 api_key: "8eff6f1c66dfa3283d878588d6ab6ff3",
};
const App = () => {
  return (
    <div>
      <Nav />
      <Header/>
      <Content/>
    </div>
  );
};

export default App;
