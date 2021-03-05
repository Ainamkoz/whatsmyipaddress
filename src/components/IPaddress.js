import React, {useState} from 'react'; 
import Map from './Map';
import { TileLayer, MapContainer} from 'react-leaflet';

const IPaddress = () => {
    const [address, setAddress] = useState (null); 

    const getUserIpAddress = () => {
        fetch('https://geo.ipify.org/api/v1?apiKey=at_X623pDM12qHTaPvsGHjPLZo28b7Ug')
        .then (response => response.json())
        .then (data => setAddress(data));
    }


    return (
        <div class="row">
            <div class="col text-center">
        <MapContainer
                center={{ lat: 43.238949, lng:  76.889709 }}
                zoom={13}
                scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Map/>
        </MapContainer>
            </div>
            <div class="row justify-content-center mt-3">
                <div className="col-lg-6 text-center text-dark"> 
                <h5 class="card-title"> <strong>What's My IP?</strong> </h5>

                <p className="mt-3">
                {address && (
                    <ul className="list-group">
                        <li className="list-group-item">
                           <strong> My IP details:</strong>  {" "}
                        {`${address.location.city},  ${address.location.region} (${address.location.country})`}
                        </li>
                            <li className="list-group-item">
                         <strong>  My IP address: </strong> {address.ip}
                        </li>
                    </ul>
                        )}
                   
                <button className="btn btn-primary" onClick={getUserIpAddress}>
                   <strong>  Find my IP address </strong>
                </button>    
                </p>
            </div>

</div>
        </div>     
    )
}

export default IPaddress
