import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/images/blacklogo.png";
import Cards from "./Components/Cards";

function App() {
  const [albums, setAlbum] = useState([]);
  const [images, setImages] = useState([]);
  const [CorI, setCorI] = useState(false);

useEffect(() => {
  setAlbum([
    {
      title: "Album - 1",
      id: 1,
    },
    {
      title: "Album - 2",
      id: 2,
    },
    {
      title: "Album - 3",
      id: 3,
    },
    {
      title: "Album - 4",
      id: 4,
    },
    {
      title: "Album - 5",
      id: 5,
    },
    {
      title: "Album - 6",
      id: 6,
    },
    {
      title: "Album - 6",
      id: 7,
    },
    {
      title: "Album - 6",
      id: 8,
    },
  ]);
}, []);

useEffect(() => {
  setImages([
    {
      title: "Image - 1",
      id: 1,
    },
    {
      title: "Image - 2",
      id: 2,
    },
    {
      title: "Image - 3",
      id: 3,
    },
    {
      title: "Image - 4",
      id: 4,
    },
    {
      title: "Image - 5",
      id: 5,
    },
    {
      title: "Image - 6",
      id: 6,
    },
    {
      title: "Image - 7",
      id: 7,
    },
    {
      title: "Image - 8",
      id: 8,
    },
  ]);
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
        <div></div>
      </header>
      <div className="main-section">
        <div className="main-header">
          {/* <div className="text-design">Your Albums</div> */}
          <button className="" ></button>
          <button className="button-design">Add Album</button>
        </div>
        {CorI? <Cards albums={albums} />: <Cards albums={images} />}
        
      </div>
    </div>
  );
}

export default App;
