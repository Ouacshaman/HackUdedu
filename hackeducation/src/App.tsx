import "./App.css";
import NavBar from "./components/navbar";
import LinkedList from "./components/linkedList";
import BinaryTree from "./components/binaryTree";

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <LinkedList />
      </div>
      <div>
        <BinaryTree />
      </div>
    </div>
  );
}

export default App;
