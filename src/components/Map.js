import React, {useState} from 'react'; 
import { Marker, Popup, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './../App.css'; 
import L from 'leaflet';

const Map = () =>  {
  const [position, setPosition] = useState(null); 
  const [details, setDetails] = useState(); 

  const getUserDetails = () => {
    fetch('https://restcountries.eu/rest/v2/name/kazakhstan?fullText=true')
    .then (response => response.json())
    .then (data => setDetails(data));
}
getUserDetails();
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  const myIcon = L.icon({
    iconUrl: ("https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], 
    popupAnchor: [0, -46]
});

  return position === null ? null : (
    <Marker icon={myIcon} position={position}>

{details.map((detail) => (
      <h3>
        <Popup className="popup"> 
      <ul> 
      <li> 
        <img className="flag" src="https://restcountries.eu/data/kaz.svg"/>
      </li>
        <li> 
        <strong> Country:</strong>{detail.name} 
        </li>
        <li> 
        <strong>Capital:</strong> {detail.capital} 
        </li>
        <li> 
        <strong>Population:</strong> {detail.population} 
        </li>
      
      </ul> 
      </Popup>
      </h3> 
      ))}
    </Marker>
)
} 


export default Map; 