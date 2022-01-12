import './App.css';
import Loading from './components/loading';
import {useState, useEffect } from "react"
import axios from 'axios';
import PhotoList from './components/photos';

function App() {

  const [photos, setPhotos] = useState(null);
  // use the useEffect Hook to listen to side changes
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((result) => {
      // console.table(result.data);
      setPhotos(result.data);
    });
  }, []); // only fires one time when the component loads
 
  return (
    <div >
      {photos ?  <PhotoList photos={photos} />: <Loading />}
    </div>
  );
}

export default App;
