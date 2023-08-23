import "./App.css";
import { getApi } from "./confiq/Apicalling";
import { url } from "./confiq/Api";
import { useEffect, useState } from "react";
import Datatable from "./components/Datatable";
import PostsContainer from "./components/PostsContainer";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let endpoint="products";
    getApi(url,endpoint).then((res) => {
      setData(res[endpoint]);
    });
  }, []);



  return (
    <div className="App">
      {/* <Datatable data={data}/> */}
      <PostsContainer/>
    </div>
  );
}
export default App;