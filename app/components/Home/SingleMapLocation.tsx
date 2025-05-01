"use client"
import React, { useCallback, useState } from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

interface SingleMapLocationProps {
    lat: number;
    lng: number;
}

const SingleMapLocation = ({mapLocation}: {mapLocation:SingleMapLocationProps}) => {

    const containerStyle = {
        width: '100%',
        height: '400px',
        borderRadius: '8px',
    };



    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
    })

    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad =useCallback(function callback(map: google.maps.Map) {
        const bounds = new window.google.maps.LatLngBounds(mapLocation);
        map.fitBounds(bounds);
        setMap(map);
    },[])

    const onUnmount = useCallback(function callback(map: google.maps.Map){ setMap(null)},[])

  return (
    <>
        {isLoaded ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapLocation}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}

            >
            </GoogleMap>
        ) : <>
            <div className="flex justify-center items-center h-96">
                <p className="text-gray-500">Loading...</p>
            </div>
        </>}
        
    </>
  )
}

export default SingleMapLocation