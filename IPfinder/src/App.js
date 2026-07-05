import { useState } from "react";
import axios from "axios";
import OSMMap from "./OSMMap";

function App() {
  const [ip, setIp] = useState("");

  const [location, setLocation] = useState(null);


  const searchIP = async () => {
    if (!ip) alert('please enter a valid IP');
    try {
      const res = await axios.get(`http://ip-api.com/json/${ip}`);

      if (res.data.status === "fail") {
        alert("Invalid IP address");
        setLocation(null);
        return;
    }
     
      setLocation(res.data);
    } 
    catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <>
      <h2>IP Finder</h2>
      
      <input type="text" placeholder="Enter IP address" value={ip}onChange={(e) => setIp(e.target.value)}/>
      <button onClick={searchIP}>Search</button>

{location && (
        <>
          <p><strong>Country:</strong> {location.country}</p>
          
          <p><strong>City:</strong> {location.city}</p>

          <p><strong>ISP:</strong> {location.isp}</p>
          
          <OSMMap lat={location.lat} lon={location.lon} />
        </>
      )}
    </>
  );
}

export default App;