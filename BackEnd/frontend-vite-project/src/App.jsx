import './App.css'
import { useEffect, useState } from 'react';
// import Page from './Page';
import axios from 'axios';


function App() {
  const [Fa1, setFa1] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/about')
  //     .then(res => res.json())
  //     .then(data => setFa1(data))
  //     .catch(err => console.error("Error fetching data:", err));
  // }, []);

  
  useEffect(()=>{
    axios.get('http://localhost:8080/about')
    .then((res)=>{
      setFa1(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <div className="App">
      {Fa1.map((Fa1, i) => (
        <div key={Fa1.id}>
          <table>
            <tr>
              <td><h3>{Fa1.name}</h3></td>
              <td><h3>{Fa1.class}</h3></td>
            </tr>
          
          </table>
        </div>
      ))}
    </div>
  );
}

export default App;
