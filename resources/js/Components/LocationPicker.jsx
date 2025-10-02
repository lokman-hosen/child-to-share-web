import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationPicker = ({ onLocationSelect, initialPosition }) => {
    const [position, setPosition] = useState(initialPosition || null);
    const [userLocation, setUserLocation] = useState(null);

    // Get user's current location as fallback
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const userPos = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    };
                    setUserLocation(userPos);
                    if (!position) {
                        setPosition(userPos);
                        onLocationSelect(userPos);
                    }
                },
                (error) => {
                    console.log('Geolocation error:', error);
                    // Default to a common location if geolocation fails
                    const defaultPos = { lat: 23.8103, lng: 90.4125 }; // Default to Dhaka, Bangladesh
                    if (!position) {
                        setPosition(defaultPos);
                        onLocationSelect(defaultPos);
                    }
                }
            );
        }
    }, []);

    function MapClickHandler() {
        useMapEvents({
            click: (e) => {
                const newPosition = {
                    lat: e.latlng.lat,
                    lng: e.latlng.lng
                };
                setPosition(newPosition);
                onLocationSelect(newPosition);
            },
        });
        return null;
    }

    const handleUseCurrentLocation = () => {
        if (userLocation) {
            setPosition(userLocation);
            onLocationSelect(userLocation);
        } else {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const newPosition = {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    };
                    setPosition(newPosition);
                    onLocationSelect(newPosition);
                },
                (error) => {
                    alert('Unable to get your current location. Please click on the map to select your location.');
                }
            );
        }
    };

    return (
        <div className="location-picker">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                {/*<button*/}
                {/*    type="button"*/}
                {/*    onClick={handleUseCurrentLocation}*/}
                {/*    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"*/}
                {/*>*/}
                {/*    Use My Current Location*/}
                {/*</button>*/}
                {/*<p className="text-sm text-gray-600 flex items-center">*/}
                {/*    Or click on the map to select your location*/}
                {/*</p>*/}
            </div>

            <div className="border rounded-lg overflow-hidden">
                <MapContainer
                    center={position ? [position.lat, position.lng] : [23.8103, 90.4125]}
                    zoom={13}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <MapClickHandler />
                    {position && (
                        <Marker position={[position.lat, position.lng]} />
                    )}
                </MapContainer>
            </div>

            {position && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                        <strong>Selected Location:</strong><br />
                        Latitude: {position.lat.toFixed(6)}<br />
                        Longitude: {position.lng.toFixed(6)}
                    </p>
                </div>
            )}
        </div>
    );
};

export default LocationPicker;