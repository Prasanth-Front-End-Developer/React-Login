import Pop from "./component/pop";
import Home from "./component/home";
import Signup from "./component/signup";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <Home/>
      <Pop/>
      <Signup/>
      <Navbar/>
    </div>
  );
}

export default App;
