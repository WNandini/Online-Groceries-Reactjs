import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {

    useEffect(() => {
        // if ("geolocation" in navigator) {
        //     console.log("Available");
        // } else {
        //     console.log("Not Available");
        // }

        navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        })
        
        // navigator.geolocation.getCurrentPosition(
        //     function(position) {
        //       console.log(position);
        // },
        //     function(error) {
        //       console.error("Error Code = " + error.code + " - " + error.message);
        //     }
        // );
    })

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };
    const location = {
        address: 'Indore',
        lat: 22.7196,
        lng: 75.8577,
    }
    return(
        <div style={{ height: '100vh', width: '100%',marginTop: '50px',marginBottom: '50px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;